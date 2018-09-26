// @ts-ignore
const c = artifacts.require("./SendSomeEth.sol")

export default function deployContract(deployer) {
  deployer.deploy(c)
}
