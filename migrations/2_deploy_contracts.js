var SaiyanToken = artifacts.require("./SaiyanToken.sol");
var SaiyanTokenSale = artifacts.require("./SaiyanTokenSale.sol");
require('dotenv').config({path: '../.env'});

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(SaiyanToken, process.env.INITIAL_TOKENS);
    await deployer.deploy(SaiyanTokenSale, 1, addr[0], SaiyanToken.address);
    let tokenInstance = await SaiyanToken.deployed();
    await tokenInstance.transfer(SaiyanTokenSale.address, process.env.INITIAL_TOKENS);
};