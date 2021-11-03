import { ContractFactory, Contract } from "ethers";
import { artifacts, ethers, network } from "hardhat";

// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check


  const fse = require("fs-extra");

  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
      "gets automatically created and destroyed every time. Use the Hardhat" +
      " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Account balance:", (await deployer.getBalance()).toString());

  await deployContract("PepperDAO");
  await deployContract("PepperNFT");

  //Need to modify the code so that we can pass the contract address of our ERC20 to this

  //await deployContract("PepperGovernor"); 
  
  console.log("Exporting all types:");
  const srcDir = __dirname + "/../typechain";
  const destDir = __dirname + "/../../web/src/contracts/types";

  // To copy a folder or file  
  fse.copySync(srcDir, destDir, { overwrite: true }, function (err:any) {
    if (err) {
      console.error(err);
    } else {
      console.log("success!");
    }
  });
}

async function deployContract(name: string) {

  console.log("Deploying ", name);
  const Token: ContractFactory = await ethers.getContractFactory(name);
  const token = await Token.deploy();
  await token.deployed();

  console.log("Contract address:", token.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(token, name);
}

function saveFrontendFiles(token: Contract, name: string) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../../web/src/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  let toWrite: string = '{"address":"' + token.address + '"}';
  fs.writeFileSync(
    contractsDir + "/" + name + "_address.json",
    toWrite
  );

  const TokenArtifact = artifacts.readArtifactSync(name);

  fs.writeFileSync(
    contractsDir + "/" + name + ".json",
    JSON.stringify(TokenArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error:any) => {
    console.error(error);
    process.exit(1);
  });
