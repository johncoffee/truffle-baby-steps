const BlockVariables = artifacts.require("BlockVariables")

contract('BlockVariables', function(accounts) {

  let instance:any

  before(async () => {
    instance = await BlockVariables.deployed()
  })

  it("should retrieve miner address", async () => {
    const addr:string = await instance.getCurrentMinerAddress()
    assert.ok(addr)
  })

  it("should retrieve difficulty", async () => {
    const diff = await instance.getCurrentDifficulty()
    assert.ok(diff)
  })

  it("should retrieve gas limit", async () => {
    const gasLimit = await instance.getCurrentGaslimit()
    assert.isObject(gasLimit)
    expect(gasLimit.toString()).not.to.equal('0')
  })

  it("should retrieve block no", async () => {
    const blockNo = await instance.getCurrentBlockNumber()
    assert.ok(blockNo)
    assert.isObject(blockNo)
  })

  it("should timestamp", async () => {
    const timestamp = await instance.getBlockTimestamp()
    assert.isObject(timestamp)
    expect(timestamp.toString()).not.to.equal('0')
  })

})