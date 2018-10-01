const c = artifacts.require("./StateMachine.sol")

function deployContract(deployer, network, accounts) {
  deployer.deploy(c)
}

module.exports = deployContract