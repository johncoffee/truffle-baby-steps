const c = artifacts.require("./DelegatedCalls.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract