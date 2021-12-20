const NotPayable = artifacts.require("NotPayable")

contract('NotPayable', function([deployer]) {

  it("should fail sending the contract ether because its NOT payable", async () => {
    const instance = await NotPayable.deployed()

    const wei = web3.utils.toWei('0.1', 'ether')

    let msg:string = ''
    try {
      await web3.eth.sendTransaction({
        from: deployer, to: (instance as any).address, value: wei,
      })
    }
    catch (e) {
      msg = `${e}`
    }
    assert.notEqual('', msg, "Should have thrown error - or at least not failed silently")

    const bal = await web3.eth.getBalance((instance as any).address)
    assert.equal(bal.toString() === '0', true, (instance as any).address + " should have 0 wei")
  })

  it("Throw on revert", async () => {
    const instance = await NotPayable.deployed()

    let msg:string = ''
    try {
      await instance.ReturnMeGas()
    }
    catch (e) {
      msg = `${e}`
    }
    assert.notEqual('', msg, "Should have thrown error - or at least not failed silently")
  })
})
