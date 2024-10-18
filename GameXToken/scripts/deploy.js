async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const GameXToken = await ethers.getContractFactory("GameXToken");
    const gameXToken = await GameXToken.deploy();
    console.log("GameX Token address:", gameXToken.address);

    const Vesting = await ethers.getContractFactory("Vesting");
    const vesting = await Vesting.deploy(gameXToken.address);
    console.log("Vesting contract address:", vesting.address);

    // Token Allocation
    const totalSupply = ethers.utils.parseEther("7000000000");
    const publicSale = totalSupply.mul(30).div(100);
    const teamAndAdvisors = totalSupply.mul(20).div(100);
    const developmentFund = totalSupply.mul(15).div(100);
    const marketingAndPartnerships = totalSupply.mul(15).div(100);
    const investors = totalSupply.mul(10).div(100);
    const liquidityPool = totalSupply.mul(5).div(100);
    const reserveFund = totalSupply.mul(5).div(100);

    // Vesting Start Time
    const startTime = Math.floor(Date.now() / 1000);

    // Add schedules to vesting contract
    await vesting.addSchedule(
        deployer.address, // Replace with Public Sale address
        50, // 50% initial release
        0, // No cliff
        6 * 30 * 24 * 60 * 60, // 6 months
        publicSale,
        startTime
    );

    await vesting.addSchedule(
        deployer.address, // Replace with Team and Advisors address
        0, // No initial release
        6 * 30 * 24 * 60 * 60, // 6 months cliff
        24 * 30 * 24 * 60 * 60, // 24 months vesting after cliff
        teamAndAdvisors,
        startTime
    );

    await vesting.addSchedule(
        deployer.address, // Replace with Development Fund address
        10, // 10% initial release
        0, // No cliff
        18 * 30 * 24 * 60 * 60, // 18 months
        developmentFund,
        startTime
    );

    await vesting.addSchedule(
        deployer.address, // Replace with Marketing and Partnerships address
        20, // 20% initial release
        0, // No cliff
        12 * 30 * 24 * 60 * 60, // 12 months
        marketingAndPartnerships,
        startTime
    );

    await vesting.addSchedule(
        deployer.address, // Replace with Reserve Fund address
        10, // 10% initial release
        0, // No cliff
        24 * 30 * 24 * 60 * 60, // 24 months
        reserveFund,
        startTime
    );

    // Transfer initial allocations
    await gameXToken.transfer(vesting.address, totalSupply.sub(liquidityPool));
    await gameXToken.transfer(deployer.address, liquidityPool); // Replace with Liquidity Pool address
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });