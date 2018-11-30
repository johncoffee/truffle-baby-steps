import { ArrayOfContractInstance } from '../build/contract-interfaces'

const ArrayOfContract = artifacts.require("ArrayOfContract")
const SimpleJoe = artifacts.require("SimpleJoe")

contract('ArrayOfContract', () => {
  let instance:ArrayOfContractInstance

  beforeEach(async () => {
    instance = await ArrayOfContract.new()
  })

  it("should add 1 Joe to the list", async () => {
    const joe = await SimpleJoe.new()
    const address1:string = (joe as any).address
    await instance.add(address1)
    const address2:string = await instance.list.call(0)
    assert.strictEqual(address1, address2)
  })

})