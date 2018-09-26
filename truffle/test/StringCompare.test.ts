const StringCompare = artifacts.require("StringCompare")

contract('StringCompare', function(accounts) {

  it("Compare some hardcoded strings", async () => {
    const instance = await StringCompare.new()
    const a = await instance.StaticCompare.call()
    assert.ok(a)
  })

})