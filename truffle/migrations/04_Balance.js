const c = artifacts.require("./Balance.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract