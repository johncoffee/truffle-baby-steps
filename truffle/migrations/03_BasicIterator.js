const c = artifacts.require("./BasicIterator.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract