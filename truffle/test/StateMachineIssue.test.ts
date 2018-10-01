const StateMachineIssue = artifacts.require("StateMachineIssue")

contract('StateMachineIssue', function(accounts) {

  it("should start in getCurrentStateId() == 'open'", async () => {
    const instance = await StateMachineIssue.deployed()
    const a = await instance.getCurrentStateId()
    assert.strictEqual("open",web3._extend.utils.toUtf8(a), "the state should be 'open'")
  })

  it("should have a next state", async () => {
    const instance = await StateMachineIssue.deployed()
    const a = await instance.getCurrentStateId()
    const b = await instance.getNextState()
    assert.notEqual(a.toString(), b.toString(), "next state should not be same as current")
  })

  it("should transition to next state", async () => {
    const instance = await StateMachineIssue.deployed()
    const a = await instance.getCurrentStateId()
    assert.strictEqual("open",web3._extend.utils.toUtf8(a), "the state should now be 'open'")
    await instance.goToNextState()
    const b = await instance.getCurrentStateId()
    assert.strictEqual("resolved",web3._extend.utils.toUtf8(b), "the state should now be 'resolved'")
  })

})