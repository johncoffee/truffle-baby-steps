// @ts-ignore
const c = artifacts.require("./NotPayable.sol")

export default function deployContract(deployer) {
  deployer.deploy(c)
}

