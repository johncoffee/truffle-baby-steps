import { ArrayGetSetterInstance } from '../build/contract-interfaces/index'

const ArrayGetSetter = artifacts.require("ArrayGetSetter")

contract('ArrayGetSetter', ([deployer, acc1]) => {
  let instance:ArrayGetSetterInstance

  beforeEach(async () => {
    instance = await ArrayGetSetter.new()
  })

  it('should return an array of numbers', async () => {
    const arr = await instance.getArray()
    assert.isTrue(arr instanceof Array, 'should get an array')
    assert.isTrue(arr[0].eq(arr[1]), 'there should be ones in the array')
  })

  // const greetingText = "Hello ethereum"
  //
  // it("should be able to set the max. gas to block.gasLimit", async () => {
  //   const instance = await ArrayGetSetter.deployed()
  //
  //   const block = await web3.eth.getBlock("latest")
  //
  //   const gas:BigNumber = await (instance.setGreeting as any).estimateGas(greetingText) // TODO fix type-washing
  //   assert.notEqual(gas.toString(),'0', 'gas usage should not be 0')
  //
  //   // TODO fix type-washing
  //   const res = await instance.setGreeting(greetingText, <Truffle.TransactionDetails>{
  //     from: deployer, gas: block.gasLimit
  //   })
  //
  //   // TODO fix type-washing
  //   assert.isAtLeast((res as any).receipt.blockNumber, 1, "should be included in a block")
  // })
  //
  // it("should be expensive", async () => {
  //   const instance = await ArrayGetSetter.deployed()
  //
  //   const buffer = new Int8Array(2 * 2 ** 10) // 2 KB
  //   const txRes = await instance.setGreeting(buffer.fill("a".charCodeAt(0)).join())
  //
  //   // TODO fix type-washing
  //   // console.log((txRes as any).receipt.gasUsed, 1, "should use gas") // 4300411
  //   assert.isAtLeast((txRes as any).receipt.gasUsed, 1, "should use gas")
  //   assert.isAtLeast((txRes as any).receipt.blockNumber, 1, "should be included in a block")
  // })

})