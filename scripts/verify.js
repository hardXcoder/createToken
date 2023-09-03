// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const { ethers, network, run } = require("hardhat");


// import { ethers, network, run } from "hardhat";


async function main() {


  // const Token = await ethers.getContractFactory("PaxoTokens");
  // const token = await Token.deploy();
  // await token.deployed();


  // const Nft = await ethers.getContractFactory("PaxoNfts");
  // const nft = await Nft.deploy();
  // await nft.deployed();

  // const Redemption = await ethers.getContractFactory("PaxoRedemptionContract");
  // const redemption = await Redemption.deploy(token.address, nft.address);
  // await redemption.deployed();




  try {
    await run(`verify:verify`, {
      address: "0x45091a54B9a9eDcF288b4a077d4305c8623Cc331",
    });
  }
  catch (error) {
    console.log(error)
  }

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
