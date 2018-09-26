const c = artifacts.require("./BasicIterator.sol")

export default (function deployContract(deployer) {
  deployer.deploy(c)
}) as Truffle.Migration
