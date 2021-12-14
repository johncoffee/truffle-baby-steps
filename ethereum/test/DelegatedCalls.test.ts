const DelegatedCalls = artifacts.require("DelegatedCalls")

contract('DelegatedCalls', ([deployer, acc1]) => {

  it("deployed with migration script", async () => {
    const instance = await DelegatedCalls.deployed()
  })
  it("new instance ", async () => {
    const instance = await DelegatedCalls.new()
    // const a = await instance.someMethod()
    // assert.equal(a, b, "should")
  })

})