import Deployer = Truffle.Deployer
import Migration = Truffle.Migration
import Accounts = Truffle.Accounts

const _c = artifacts.require("./StringCompare.sol")

export default function deployContract(deployer:Deployer, network: string, accounts: Accounts) {
  deployer.deploy(_c)
}
