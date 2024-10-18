// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/Math.sol";
import "@openzeppelin/contracts/utils/Context.sol";

contract Vesting is Ownable, ReentrancyGuard {

    using Math for uint256;


    IERC20 public token;

    struct Schedule {
        uint256 initialRelease;
        uint256 cliffDuration;
        uint256 vestingDuration;
        uint256 totalAmount;
        uint256 amountReleased;
        uint256 startTime;
    }

    mapping(address => Schedule) public schedules;

    event TokenReleased(address beneficiary, uint256 amount);

    constructor(IERC20 _token, address initialOwner) Ownable(initialOwner) {
        token = _token;
    }


    function addSchedule(
        address _beneficiary,
        uint256 _initialRelease,
        uint256 _cliffDuration,
        uint256 _vestingDuration,
        uint256 _totalAmount,
        uint256 _startTime
    ) external onlyOwner {

        require(schedules[_beneficiary].totalAmount == 0, "Schedule already exists");

        schedules[_beneficiary] = Schedule({
            initialRelease: _initialRelease,
            cliffDuration: _cliffDuration,
            vestingDuration: _vestingDuration,
            totalAmount: _totalAmount,
            amountReleased: 0,
            startTime: _startTime
        });

        releaseTokens(_beneficiary); // Release initial tokens immediately
    }

    function releaseTokens(address _beneficiary) public {
        Schedule storage schedule = schedules[_beneficiary];
        require(schedule.totalAmount > 0, "No schedule found");

        uint256 elapsedTime = block.timestamp - schedule.startTime;
        uint256 vestedAmount;

        if(elapsedTime < schedule.cliffDuration){
            vestedAmount = (schedule.totalAmount * schedule.initialRelease) / 100;
        } else if (elapsedTime >= schedule.vestingDuration){
            vestedAmount = schedule.totalAmount;
        } else {
            uint256 initialReleaseAmount = (schedule.totalAmount * schedule.initialRelease) / 100;
            uint256 vestingReleaseAmount = ((schedule.totalAmount - initialReleaseAmount) * (elapsedTime - schedule.cliffDuration)) / (schedule.vestingDuration - schedule.cliffDuration);
            vestedAmount = initialReleaseAmount + vestingReleaseAmount;
        }

        uint256 releaseAmount = vestedAmount - schedule.amountReleased;
        require(releaseAmount > 0, "No tokens to release");

        schedule.amountReleased = vestedAmount;
        require(token.transfer(_beneficiary, releaseAmount), "Token transfer failed");

        emit TokenReleased(_beneficiary, releaseAmount);
    } 
}