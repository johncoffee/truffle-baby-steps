"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const command = process.argv[2];
const inputName = process.argv[3];
console.assert((command === "create" || command === "mk" || command === "rm"), "Please provide a command, eg. `create 01_HelloWorld`");
console.assert(inputName, "Please provide a contract name, eg. 01_HelloWorld");
const normalizedName = inputName.replace(/^[\d_]+/, '');
const solContractTpl = `
pragma solidity ^0.4.24;

contract ${normalizedName} {
    
    constructor() public
    {
    }   
}
`.trim();
const migrationJsTpl = `
const c = artifacts.require("./${normalizedName}.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract
`.trim();
const testTsTpl = `
const ${normalizedName} = artifacts.require("${normalizedName}")

contract('${normalizedName}', function(accounts) {

  it("should ", async () => {
    const instance = await ${normalizedName}.deployed()
    // const a = await instance.fieldName.call()
    // assert.equal(a, b, "")
  })

})
`.trim();
const testSolTpl = ``;
const migPath = path_1.join(__dirname, "../", 'truffle/migrations', inputName + '.js');
const solPath = path_1.join(__dirname, "../", 'truffle/contracts', inputName + '.sol');
const tsTestPath = path_1.join(__dirname, "../", 'truffle/test', inputName + '.test.ts');
const solTestPath = path_1.join(__dirname, "../", 'truffle/test', inputName + '.test.sol');
if (command === "create" || command === "mk") {
    fs_extra_1.writeFile(migPath, migrationJsTpl);
    fs_extra_1.writeFile(solPath, solContractTpl);
    fs_extra_1.writeFile(tsTestPath, testTsTpl);
}
else if (command === "rm") {
    fs_extra_1.remove(migPath);
    fs_extra_1.remove(solPath);
    fs_extra_1.remove(tsTestPath);
    fs_extra_1.remove(solTestPath);
}
