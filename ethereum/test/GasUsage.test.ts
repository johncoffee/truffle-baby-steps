import BigNumber from 'bignumber.js'

const GasUsage = artifacts.require("GasUsage")

contract('GasUsage', ([deployer, acc1]) => {

  const greetingText = "Hello ethereum"

  it("should be able to set the max. gas to block.gasLimit", async () => {
    const instance = await GasUsage.deployed()

    const block = await web3.eth.getBlock("latest")

    const gas:BigNumber = await (instance.setGreeting as any).estimateGas(greetingText) // TODO fix type-washing
    assert.notEqual(gas.toString(),'0', 'gas usage should not be 0')

    // TODO fix type-washing
    const res = await instance.setGreeting(greetingText, <Truffle.TransactionDetails>{
      from: deployer, gas: block.gasLimit
    })

    // TODO fix type-washing
    assert.isAtLeast((res as any).receipt.blockNumber, 1, "should be included in a block")
  })

})