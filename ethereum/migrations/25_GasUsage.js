const c = artifacts.require("./GasUsage.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract