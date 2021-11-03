import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { PepperDAO__factory } from "../typechain/factories/PepperDAO__factory";

chai.use(solidity);
const { expect } = chai;


describe("Token", () => {
  let tokenAddress: string;

  beforeEach(async () => {
    const [deployer] = await ethers.getSigners();
    const tokenFactory = new PepperDAO__factory(deployer);
    const tokenContract = await tokenFactory.deploy();
    tokenAddress = tokenContract.address;
   
    expect(await tokenContract.totalSupply()).to.gt(0);
  });

  describe("Mint", async () => {
    it("Check and verify the total supply greater than zero", async () => {
      const [deployer] = await ethers.getSigners();
      const tokenInstance = new PepperDAO__factory(deployer).attach(tokenAddress);
      
      expect(await tokenInstance.balanceOf(deployer.address)).to.gt(0);
    });
  });

  
});