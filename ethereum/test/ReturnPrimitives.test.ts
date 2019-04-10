import BigNumber from 'bignumber.js'

const ReturnPrimitives = artifacts.require("ReturnPrimitives")

contract('ReturnPrimitives', ([deployer, acc1]) => {

  it("should return theAnswer", async () => {
    const instance = await ReturnPrimitives.deployed()
    const a = await instance.giveString()
    assert.equal(a, "theAnswer", "should have given the answer")
  })

  it("should give a negative BigNumber", async () => {
    const instance = await ReturnPrimitives.deployed()
    const a = await instance.giveBigInt()
    assert.isTrue(new BigNumber(-42).isEqualTo(a), "should have given the answer")
    assert.strictEqual("-42", a.toString(), "should be toString-able")
    assert.strictEqual(-42, a.toNumber(), "should be toNumber-able")
  })

  it("should give a BigNumber", async () => {
    const instance = await ReturnPrimitives.deployed()
    const a = await instance.giveBigUint()
    assert.isTrue(new BigNumber(42).isEqualTo(a), "should have given the answer")
  })

  it("should return multiple values as an array", async () => {
    const instance = await ReturnPrimitives.deployed()
    const res = await instance.giveThreeValues()
    const [uintVal, stringVal, byte1Val] = Object.values(res)
    assert.equal(uintVal, '1', "expected a BigNumber")
    assert.isString(stringVal, "expected a str")
    assert.equal(byte1Val.toString(), "0x42", "expected a str for bytes")
  })

  it("should return an address", async () => {
    const instance = await ReturnPrimitives.deployed()
    const res = await instance.giveAddressAndBytes()
    const [addr1, addr2, addr3] = Object.values(res)
    assert.lengthOf(addr1, 42, "addr1 should have length")
    assert.lengthOf(addr2, 42, "addr2 should have length")
    assert.lengthOf(addr3, 42, "addr3 should have length")

    assert.equal(addr1.toLowerCase(), "0x00000000000000000000000000017dfcdece4000", "Should have this value")
  })
})
