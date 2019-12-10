const CryptographicFunctions = artifacts.require("CryptographicFunctions")

contract('CryptographicFunctions', ([deployer, acc1]) => {

  it("should make hash of bytes", async () => {
    const instance = await CryptographicFunctions.new()
    const a = await instance.HashThis("0x5b302c302c302c302c302c302c302c302c302c302c302c302c302c302c302c30")
    assert(!!a, "should be a thing")
  })
})