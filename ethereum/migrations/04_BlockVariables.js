const c = artifacts.require("./BlockVariables.sol")

function deployContract(deployer, network, accounts) {
  deployer.deploy(c)
}

module.exports = deployContract