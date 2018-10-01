

const c = artifacts.require("./NotPayable.sol")

function deployContract(deployer, network, accounts) {
  deployer.deploy(c)
}

module.exports = deployContract