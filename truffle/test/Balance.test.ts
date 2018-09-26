const Balance = artifacts.require("./Balance.sol")

contract('Balance', function(accounts:string[]) {

  it("sender must be rich!", async () => {
    const instance = await Balance.deployed()
    const bal = await instance.getOwnersBalance() // using .call simulates a block chain transaction, which is not so relevant with a constant function
    assert.equal(!!bal, true, "We should have something: "+bal.toString())
  })

  it("should not have ether yet", async () => {
    const instance = await Balance.deployed()
    const bal = await instance.getThisBalance()
    assert.equal(bal.toString(), "0", "We should not have: "+bal.toString())
  })
})
