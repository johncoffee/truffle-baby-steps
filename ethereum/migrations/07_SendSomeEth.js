

const c = artifacts.require("./SendSomeEth.sol")

function deployContract(deployer, network, accounts) {
  deployer.deploy(c)
}

module.exports = deployContract