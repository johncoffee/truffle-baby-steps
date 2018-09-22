"use strict";
const Balance = artifacts.require("./SendSomeEth.sol");
contract('Balance', function (accounts) {
    it("sender must be rich!", async () => {
        const instance = await Balance.deployed();
        const bal = await instance.getOwnersBalance.call();
        assert.equal(!!bal, true, "We should have something: " + bal.toString());
    });
    it("should not have ether yet", async () => {
        const instance = await Balance.deployed();
        const bal = await instance.getThisBalance.call();
        assert.equal(bal, "0", "We should not have: " + bal.toString());
    });
});
