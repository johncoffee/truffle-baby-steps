const StringCompare = artifacts.require("StringCompare")

contract('StringCompare', function(accounts) {

  it("Compare some hardcoded strings", async () => {
    const instance = await StringCompare.deployed()
    const a = await instance.StaticCompare()
    assert.ok(a)
  })

})