"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var path_1 = require("path");
var command = process.argv[2];
var inputName = process.argv[3];
console.assert((command === "create" || command === "mk" || command === "rm"), "Please provide a command, eg. `create 01_HelloWorld`");
console.assert(inputName, "Please provide a contract name, eg. 01_HelloWorld");
var normalizedName = inputName.replace(/^[\d_]+/, '');
var solContractTpl = ("\npragma solidity ^0.4.24;\n\ncontract " + normalizedName + " {\n    \n    constructor() public\n    {\n    }   \n}\n").trim();
var migrationTpl = ("\nimport Deployer = Truffle.Deployer\nimport Migration = Truffle.Migration\nimport Accounts = Truffle.Accounts\n\nconst c = artifacts.require(\"./" + normalizedName + ".sol\")\n\nfunction deployContract(deployer:Deployer, network: string, accounts: Accounts) {\n  deployer.deploy(c)\n}\n\nmodule.exports = (deployContract as Migration)\n").trim();
var testTsTpl = ("\nconst " + normalizedName + " = artifacts.require(\"" + normalizedName + "\")\n\ncontract('" + normalizedName + "', function(accounts) {\n\n  it(\"should \", async () => {\n    const instance = await " + normalizedName + ".deployed()\n    // const a = await instance.fieldName.call()\n    // assert.equal(a, b, \"\")\n  })\n\n})\n").trim();
var testSolTpl = "";
var migPath = path_1.join(__dirname, "../", 'truffle/migrations', inputName + '.ts');
var solPath = path_1.join(__dirname, "../", 'truffle/contracts', inputName + '.sol');
var tsTestPath = path_1.join(__dirname, "../", 'truffle/test', inputName + '.test.ts');
var solTestPath = path_1.join(__dirname, "../", 'truffle/test', inputName + '.test.sol');
if (command === "create" || command === "mk") {
    fs_extra_1.writeFile(migPath, migrationTpl);
    fs_extra_1.writeFile(solPath, solContractTpl);
    fs_extra_1.writeFile(tsTestPath, testTsTpl);
}
else if (command === "rm") {
    fs_extra_1.remove(migPath);
    fs_extra_1.remove(solPath);
    fs_extra_1.remove(tsTestPath);
    fs_extra_1.remove(solTestPath);
}
