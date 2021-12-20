const ArrayToConstructor = artifacts.require("ArrayToConstructor")

contract('ArrayToConstructor', () => {

  it("should fail if 0x is given", async () => {
    let reason = ''
    try {
      await ArrayToConstructor.new(['0x0000000000000000000000000000000000000000'])
    }
    catch (e) {
      reason = `${e}`
    }
    assert(reason.includes('Nice people cannot be address(0)'), "We expected the creation to go bad")
  })

  it("should succeed if addresses are normal", async () => {
    await ArrayToConstructor.new([
      '0x010df46c81a59500287227f1e772f860e4cf9edf',
      '0xd09897fcd3387169a399fbbf18d705a1fe4c553f',
    ])
  })

})
