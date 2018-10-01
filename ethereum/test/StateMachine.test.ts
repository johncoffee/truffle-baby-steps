const StateMachine = artifacts.require("StateMachine")

contract('StateMachine', function(accounts) {

  it("should be 0 (bytes32)", async () => {
    const instance = await StateMachine.deployed()
    const a = await instance.getCurrentStateId()
    assert.ok(a)
    assert.equal(web3._extend.utils.toUtf8(a), '', "should start with empty byte32")
  })
})