
const Bytes = artifacts.require("./Bytes")

contract('Some bytes tests', ([deployer]) => {

  it("some bytes", async () => {
    const instance = await Bytes.new()

    const randomBytes = '0x5b302c302c302c302c302c302c302c302c302c302c302c302c302c302c302c30'

    await instance
      .setStatus("2", randomBytes)

    const res = await instance.status("2")
    const res2 = await instance.getStatus.call("2")

    assert.equal(res2, randomBytes, "problem with saving")
    assert.equal(res, randomBytes, "problem with saving")
  })

  it("should do getNotEmpty", async () => {
    const instance = await Bytes.new()

    const randomBytes = '0x5b302c302c302c302c302c302c302c302c302c302c302c302c302c302c302c30'

    await instance
      .setStatus("2", randomBytes)

    const res2 = await instance.getNotEmpty("2")
    assert.equal(res2, randomBytes, "problem with saving")

  })

})