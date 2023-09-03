const { ethers, upgrades } = require("hardhat");

async function main() {
  const CreateToken2 = await ethers.getContractFactory(
    "CreateToken2"
  );
  console.log("Upgrading CreateToken...");
  await upgrades.upgradeProxy(
    "0x12EcCf438331b2C1158749cF1768DC931E467b1a",
    CreateToken2
  );
  console.log("Upgraded Successfully");
}

main();