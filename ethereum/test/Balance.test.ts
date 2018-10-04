import BigNumber from 'bignumber.js'

const Balance = artifacts.require("./Balance.sol")

contract('Balance', ([deployer]) => {

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

  it("should send some ether", async () => {
    const instance = await Balance.deployed()

    const targetWei = new BigNumber(10000)

    const beforePromise = web3.eth.getBalance(deployer)

    await web3.eth.sendTransaction({
      from: deployer, to: instance.address, value: targetWei.toString(),
    })

    const [before, after, bal] = await Promise.all([beforePromise, web3.eth.getBalance(deployer), web3.eth.getBalance(instance.address)])

    assert.equal(targetWei.toString(), bal.toString(), "There should be 10000 wei here")

    // I'm lazy here
    assert.isTrue(before.gt(after), "Deployer account should have lost some dought")
  })
})
