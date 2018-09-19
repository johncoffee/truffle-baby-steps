"use strict";
const Balance = artifacts.require("Balance");
contract('Balance', function (accounts) {
    it("sender have ether", async () => {
        const instance = await Balance.deployed();
        const bal = await instance.getOwnersBalance.call();
        assert.equal(!!bal, true, "We should have something: " + bal.toString());
    });
});
