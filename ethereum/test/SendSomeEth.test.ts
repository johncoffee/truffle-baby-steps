import BigNumber from 'bignumber.js'

declare const web3:Web3

const SendSomeEth = artifacts.require("SendSomeEth")

contract('SendSomeEth', function(accounts:string[]) {
  let keyFromPw:string
  let acct:string[]
  let lw:any
  const [deployer, account1] = accounts

  // let createSigs = function(signers:string[], multisigAddr:string[], nonce:any, destinationAddr:string, value:any, data:string) {
  //
  //   let input = '0x19' + '00' + multisigAddr.slice(2) + destinationAddr.slice(2) + leftPad(value.toString('16'), 64, '0') + data.slice(2) + leftPad(nonce.toString('16'), 64, '0')
  //   let hash = solsha3(input)
  //
  //   const sigV:string[] = []
  //   const sigR:string[] = []
  //   const sigS:string[] = []
  //
  //   for (var i=0; i<signers.length; i++) {
  //     let sig = lightwallet.signing.signMsgHash(lw, keyFromPw, hash, signers[i])
  //     sigV.push(sig.v)
  //     sigR.push('0x' + sig.r.toString('hex'))
  //     sigS.push('0x' + sig.s.toString('hex'))
  //   }
  //
  //   return {sigV: sigV, sigR: sigR, sigS: sigS}
  //
  // }

  // let executeSendSuccess = async function(owners:string[], threshold:number, signers:string[], done:Function) {
  //
  //   let multisig = await SendSomeEth.new(threshold, owners, {from: accounts[0]})
  //
  //   let randomAddr = solsha3(Math.random()).slice(0,42)
  //
  //   // Receive funds
  //   await web3.eth.sendTransaction({from: accounts[0], to: multisig.address, value: web3.toWei('0.1', 'ether')})
  //
  //   let nonce = await multisig.nonce.call()
  //   assert.equal(nonce.toNumber(), 0)
  //
  //   let bal = await web3.eth.getBalance(multisig.address)
  //   assert.equal(bal, web3.toWei(0.1, 'ether'))
  //
  //   // check that owners are stored correctly
  //   for (var i=0; i<owners.length; i++) {
  //     let ownerFromContract = await multisig.ownersArr.call(i)
  //     assert.equal(owners[i], ownerFromContract)
  //   }
  //
  //   let value = web3.toWei('0.1', 'ether')
  //
  //   let sigs = createSigs(signers, multisig.address, nonce, randomAddr, value, '0x')
  //
  //   await multisig.execute(sigs.sigV, sigs.sigR, sigs.sigS, randomAddr, value, '0x', {from: accounts[0], gasLimit: 1000000})
  //
  //   // Check funds sent
  //   bal = await web3.eth.getBalance(randomAddr)
  //   assert.equal(bal.toString(), value.toString())
  //
  //   // Check nonce updated
  //   nonce = await multisig.nonce.call()
  //   assert.equal(nonce.toNumber(), 1)
  //
  //   // Send again
  //   sigs = createSigs(signers, multisig.address, nonce, randomAddr, value, '0x')
  //   await multisig.execute(sigs.sigV, sigs.sigR, sigs.sigS, randomAddr, value, '0x', {from: accounts[0], gasLimit: 1000000})
  //
  //   // Check funds
  //   bal = await web3.eth.getBalance(randomAddr)
  //   assert.equal(bal.toString(), (value*2).toString())
  //
  //   // Check nonce updated
  //   nonce = await multisig.nonce.call()
  //   assert.equal(nonce.toNumber(), 2)
  //
  //   // Test contract interactions
  //   // let reg = await TestRegistry.new({from: accounts[0]})
  //
  //   // let number = 12345
  //   // let data = lightwallet.txutils._encodeFunctionTxData('register', ['uint256'], [number])
  //
  //   // sigs = createSigs(signers, multisig.address, nonce, reg.address, value, data)
  //   // await multisig.execute(sigs.sigV, sigs.sigR, sigs.sigS, reg.address, value, data, {from: accounts[0], gasLimit: 1000000})
  //
  //   // Check that number has been set in registry
  //   // let numFromRegistry = await reg.registry(multisig.address)
  //   // assert.equal(numFromRegistry.toNumber(), number)
  //
  //   // Check funds in registry
  //   // bal = await web3.eth.getBalance(reg.address)
  //   // assert.equal(bal.toString(), value.toString())
  //
  //   // Check nonce updated
  //   // nonce = await multisig.nonce.call()
  //   // assert.equal(nonce.toNumber(), 3)
  //
  //   done()
  // }
  //
  // let executeSendFailure = async function(owners:string[], threshold:number, signers:string[], done:Function) {
  //
  //   let multisig = await SendSomeEth.new(threshold, owners, {from: accounts[0]})
  //
  //   let nonce = await multisig.nonce.call()
  //   assert.equal(nonce.toNumber(), 0)
  //
  //   // Receive funds
  //   await web3.eth.sendTransaction({from: accounts[0], to: multisig.address, value: web3.toWei('2', 'ether')})
  //
  //   let randomAddr = solsha3(Math.random()).slice(0,42)
  //   let value = web3.toWei('0.1', 'ether')
  //   let sigs = createSigs(signers, multisig.address, nonce, randomAddr, value, '0x')
  //
  //   let errMsg = ''
  //   try {
  //     await multisig.execute(sigs.sigV, sigs.sigR, sigs.sigS, randomAddr, value, '0x', {from: accounts[0], gasLimit: 1000000})
  //   }
  //   catch(error) {
  //     errMsg = error.message
  //   }
  //
  //   assert.equal(errMsg, 'VM Exception while processing transaction: revert', 'Test did not throw')
  //
  //   done()
  // }
  //
  // let creationFailure = async function(owners:string[], threshold:number, done:Function) {
  //   let errMsg = ''
  //
  //   try {
  //     await SendSomeEth.deployed(threshold, owners, {from: accounts[0]})
  //   }
  //   catch(error) {
  //     errMsg = error.message
  //   }
  //
  //   assert.equal(errMsg, 'VM Exception while processing transaction: revert', 'Test did not throw')
  //
  //   done()
  // }

  // before((done) => {
  //
  //   let seed = "pull rent tower word science patrol economy legal yellow kit frequent fat"
  //
  //   lightwallet.keystore.createVault(
  //     {hdPathString: "m/44'/60'/0'/0",
  //       seedPhrase: seed,
  //       password: "test",
  //       salt: "testsalt"
  //     },
  //     function (err:Error, keystore:any) {
  //
  //       lw = keystore
  //       lw.keyFromPassword("test", function(e:Error,k:string) {
  //         keyFromPw = k
  //
  //         lw.generateNewAddress(keyFromPw, 20)
  //         acct = lw.getAddresses() // without 0x
  //         acct.sort()
  //         done()
  //       })
  //     })
  // })

  it("sender must be rich", async () => {
    const instance = await SendSomeEth.deployed()
    const bal = await instance.getOwnersBalance()
    assert.equal(!!bal, true, "We should have something: "+bal.toString())
  })

  it("should not have ether", async () => {
    const instance = await SendSomeEth.deployed()
    const bal = await instance.getThisBalance()
    assert.equal(bal.toString(), "0", "We should not have: "+bal.toString())
  })

  it("should not have ether", async () => {
    const instance = await SendSomeEth.deployed()
    const bal = await instance.getThisBalance()
    assert.equal(bal.toString(), "0", "We should not have: "+bal.toString())
  })

  it("should sending the contract ether", async () => {
    const instance = await SendSomeEth.deployed()
    const wei = web3.utils.toWei('0.1', 'ether')
    await web3.eth.sendTransaction({
      from: deployer, to: instance.address, value: wei, //gasPrice: web3.toWei(new BigNumber(0.01), 'ether'),
    })
    const bal = await web3.eth.getBalance(instance.address)
    assert.equal(bal.toString(), web3.utils.toWei('0.1', 'ether'), "We should have sent ether")
  })

  it("should forwardMoney", async () => {
    const instance:any = await SendSomeEth.new() // type washing
    const wei = web3.utils.toWei('0.1', 'ether')
    await web3.eth.sendTransaction({
      from: deployer, to: instance.address, value: wei, //gasPrice: web3.toWei(new BigNumber(0.01), 'ether'),
    })

    const bal1:string = await web3.eth.getBalance(account1)

    await instance.forwardMoney(account1)
    const bal2:string = await web3.eth.getBalance(account1)
    assert.strictEqual(parseInt(bal2), parseInt(bal1) + 33333, "We should have sent ether")
  })

  it("should forwardMoneyFromArray", async () => {
    const instance:any = await SendSomeEth.new() // type washing
    const wei = web3.utils.toWei('5', 'ether')
    await web3.eth.sendTransaction({
      from: deployer, to: instance.address, value: wei, //gasPrice: web3.toWei(new BigNumber(0.01), 'ether'),
    })

    await instance.forwardMoneyFromArray('0', '0x387bebF2b4C355060f1fFE8fE8Af09f730078b2A')
  })

  describe("3 signers, threshold 2", () => {

    // it("should succeed with signers 0, 1", (done) => {
    //   let signers = [acct[0], acct[1]]
    //   signers.sort()
    //   executeSendSuccess(acct.slice(0,3), 2, signers, done)
    // })

    // it("should succeed with signers 0, 2", (done) => {
    //   let signers = [acct[0], acct[2]]
    //   signers.sort()
    //   executeSendSuccess(acct.slice(0,3), 2, signers, done)
    // })
    //
    // it("should succeed with signers 1, 2", (done) => {
    //   let signers = [acct[1], acct[2]]
    //   signers.sort()
    //   executeSendSuccess(acct.slice(0,3), 2, signers, done)
    // })
    //
    // it("should fail due to non-owner signer", (done) => {
    //   let signers = [acct[0], acct[3]]
    //   signers.sort()
    //   executeSendFailure(acct.slice(0,3), 2, signers, done)
    // })
    //
    // it("should fail with more signers than threshold", (done) => {
    //   executeSendFailure(acct.slice(0,3), 2, acct.slice(0,3), done)
    // })
    //
    // it("should fail with fewer signers than threshold", (done) => {
    //   executeSendFailure(acct.slice(0,3), 2, [acct[0]], done)
    // })
    //
    // it("should fail with one signer signing twice", (done) => {
    //   executeSendFailure(acct.slice(0,3), 2, [acct[0], acct[0]], done)
    // })
    //
    // it("should fail with signers in wrong order", (done) => {
    //   let signers = [acct[0], acct[1]]
    //   signers.sort().reverse() //opposite order it should be
    //   executeSendFailure(acct.slice(0,3), 2, signers, done)
    // })

  })

  // describe("Edge cases", () => {
  //   it("should succeed with 10 owners, 10 signers", (done) => {
  //     executeSendSuccess(acct.slice(0,10), 10, acct.slice(0,10), done)
  //   })
  //
  //   it("should fail to create with signers 0, 0, 2, and threshold 3", (done) => {
  //     creationFailure([acct[0],acct[0],acct[2]], 3, done)
  //   })
  //
  //   it("should fail with 0 signers", (done) => {
  //     executeSendFailure(acct.slice(0,3), 2, [], done)
  //   })
  //
  //   it("should fail with 11 owners", (done) => {
  //     creationFailure(acct.slice(0,11), 2, done)
  //   })
  // })

})
