var SaiyanToken = artifacts.require("./SaiyanToken.sol");
var SaiyanTokenSale = artifacts.require("./SaiyanTokenSale.sol");

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(SaiyanToken, 1000000000);
    await deployer.deploy(SaiyanTokenSale, 1, addr[0], SaiyanToken.address);
    let tokenInstance = await SaiyanToken.deployed();
    await tokenInstance.transfer(SaiyanTokenSale.address, 1000000000);
};