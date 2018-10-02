const StringCompare = artifacts.require("StringCompare")

contract('StringCompare', function(accounts) {

  it("Compare some hardcoded strings", async () => {
    const instance = await StringCompare.deployed()
    const a = await instance.Compare()
    assert.strictEqual(a, true, "Should return true, because equal.")
  })

})

export {}