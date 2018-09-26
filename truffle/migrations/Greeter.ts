const c = artifacts.require("./Greeter.sol")

export const text = "Hello ethereum"

export default function (deployer) {
  deployer.deploy(c, text)
}