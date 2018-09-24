contract('NotPayable', function(accounts:string[]) {

  const NotPayable = artifacts.require("NotPayable")

  it("should fail sending the contract ether because its NOT payable", async () => {
    const instance = await NotPayable.new()

    const wei = web3.toWei('0.1', 'ether')

    let msg:string = ''
    try {
      await web3.eth.sendTransaction({
        from: web3.eth.coinbase, to: instance.address, value: wei,
      })
    }
    catch (e) {
      msg = e.toString()
    }
    assert.notEqual('', msg, "Should have thrown error - or at least not failed silently")

    const bal = await web3.eth.getBalance(instance.address)
    assert.equal(bal.toString() === '0', true, instance.address + " should have 0 wei")
  })

  it("Throw on revert", async () => {
    const instance = await NotPayable.deployed()

    let msg:string = ''
    try {
      await instance.ReturnMeGas.call()
    }
    catch (e) {
      msg = e.toString()
    }
    assert.notEqual('', msg, "Should have thrown error - or at least not failed silently")
  })
})
