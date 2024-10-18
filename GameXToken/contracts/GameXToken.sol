// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GameXToken is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 7_000_000_000 * 10**18;

    constructor(address initialOwner) ERC20("GameX", "GX") Ownable(initialOwner) {
        _mint(initialOwner, TOTAL_SUPPLY);
    }
}

