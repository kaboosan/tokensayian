var SaiyanToken = artifacts.require("./SaiyanToken.sol");

module.exports = async function(deployer) {
    await deployer.deploy(SaiyanToken, 1000000000);
};