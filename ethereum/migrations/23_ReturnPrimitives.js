const c = artifacts.require("./ReturnPrimitives.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract