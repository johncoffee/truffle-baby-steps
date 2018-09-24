import Deployer = Truffle.Deployer
import Migration = Truffle.Migration
import Accounts = Truffle.Accounts

const c = artifacts.require("./BlockVariables.sol")

function deployContract(deployer:Deployer, network: string, accounts: Accounts) {
  deployer.deploy(c)
}

module.exports = (deployContract as Migration)