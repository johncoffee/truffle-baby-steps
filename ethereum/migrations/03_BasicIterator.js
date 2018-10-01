const c = artifacts.require("./BasicIterator.sol")

function deployContract(deployer, network, accounts) {
  deployer.deploy(c)
}

module.exports = deployContract