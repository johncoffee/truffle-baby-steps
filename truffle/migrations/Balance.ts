const c = artifacts.require("./Balance.sol")

export default function deployContract(deployer) {
  deployer.deploy(c)
}
