
const c = artifacts.require("./Greeter.sol")

function deployContract(deployer, network, accounts) {
  deployer.deploy(c, "Hello ethereum")
}

module.exports = deployContract