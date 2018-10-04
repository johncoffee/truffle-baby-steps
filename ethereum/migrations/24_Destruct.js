const c = artifacts.require("./Destruct.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract