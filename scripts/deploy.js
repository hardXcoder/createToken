const { ethers, upgrades } = require("hardhat");

async function main() {
  const CreateTokenV1 = await ethers.getContractFactory(
    "CreateToken"
  );
  console.log("Deploying CreateToken ...");
  const contract = await upgrades.deployProxy(CreateTokenV1, [], {
    initializer: "initialize",
    kind: "transparent",
  });
  await contract.deployed();
  console.log("CreateTokenV1 deployed to:", contract.address);
}

main();