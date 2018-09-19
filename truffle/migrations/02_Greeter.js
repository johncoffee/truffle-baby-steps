const c = artifacts.require("./Greeter.sol")

function deployContract(deployer) {
  deployer.deploy(c, deployContract.text)
}

deployContract.text = "Hello ethereum"

module.exports = deployContract