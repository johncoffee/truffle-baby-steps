const c = artifacts.require("./BlockVariables.sol")

export default (function deployContract(deployer:Truffle.Deployer, network: string, accounts: Truffle.Accounts) {
  deployer.deploy(c)
}) as Truffle.Migration
