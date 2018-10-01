const BasicIterator = artifacts.require("BasicIterator")

contract('BasicIterator', function(accounts:Object[]) {
  it("get number in array", async () => {
    const instance = await BasicIterator.deployed()
    const n0 = await instance.getNumberAt('0') // integers return bignumber
    const n9 = await instance.getNumberAt('9') // integers return bignumber
    assert.equal(n0.toString(), '0', "the last number should be 0")
    assert.equal(n9.toString(), '9', "the last number should be 9")
  })

  it("should get sum", async () => {
    const instance = await BasicIterator.deployed()
    const getSumbn = await instance.getSum() // integers return bignumber
    assert.equal(getSumbn.toString(), '45', "is equal?")
  })
})