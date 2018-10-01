const c = artifacts.require("./StateMachineIssue.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract