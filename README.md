# PepperDAO

Welcome to Pepper DAO  - A simple DAO boiler plate implementation with its native ERC20 Token, an Open Zeppelin based Governer implementation, and a community NFT

To boostrap development, open up the root folder in VS Code, and you'll see two sub folders - chain and web. 

**Contracts**

Chain folder contans the Smart Contracts, mostly based on the OpenZeppelin boiler plates

* PepperDAO.sol - The community ERC20 Token (PEPDAO token) 
* PepperGovernor.sol - The Governance contract based on OpenZeppelin governor
* PepperNft.sol - An NFT / ERC 721 token -  could modify the minting logic later so that only the the community holders can mint it


First to compile smart contracts

* Goto chain folder 
* Run `npm install`
* Install hardhat and connect with Metamask  https://hardhat.org/getting-started/ 
* Run `npx hardhat compile` in the chain folder

Once you are able to compile, you can deploy your contracts against a hardhat node 

* Stand up a node `npx hardhat node` 
* Deploy using `npx hardhat run scripts/deploy.ts` 

If you are bored of typing `npx hardhat blah blah` all the time, try installing the hardhat shorthand https://hardhat.org/guides/shorthand.html 

Tips: 

You could just copy all the sol files in the contracts folder and try them directly in Remix ide. 



**Web App**

This is a pretty simple bootstrap code that uses all the best practices (typechain etc). To run this, you can just goto the web folder and do `yarn install` and then `yarn run`

