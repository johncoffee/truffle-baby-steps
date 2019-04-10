import BigNumber from 'bignumber.js'

const Destruct = artifacts.require("Destruct")

contract('Destruct', ([deployer, acc1]) => {

  it("Should send some dough", async () => {
    const instance = await Destruct.deployed()

    const targetWei = new BigNumber(web3.utils.toWei('200', 'wei'))
    const startBalance = await web3.eth.getBalance(deployer)

    await web3.eth.sendTransaction({
      from: deployer, to: instance.address, value: targetWei.toString(),
    })

    const contractBalance = await web3.eth.getBalance(instance.address)
    assert.isTrue(new BigNumber(contractBalance).gt(0))

    // console.log("start . . . .", startBalance.toString())
    // console.log("before kill .", await web3.eth.getBalance(deployer).toString())
    await instance.kill()

    const deadContractBalance = await web3.eth.getBalance(instance.address)
    assert.strictEqual(deadContractBalance, '0', "should have 0 ether after kill()")

    const afterKill:string = await web3.eth.getBalance(deployer)
    assert.isTrue( new BigNumber(startBalance).gt( afterKill) , "Should have spent some dough on gas while running kill()")

    // console.log("after . . . .", afterKill.toString())
  })
})
