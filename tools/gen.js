"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const defaultCmd = "mk";
const commands = [defaultCmd, 'create', 'rm'];
const inputName = process.argv[3] || process.argv[2];
const command = (commands.indexOf(process.argv[2]) === -1) ? defaultCmd : process.argv[2];
console.debug(command, inputName);
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
const migrationTpl = `
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
const migDir = path_1.join(__dirname, "../", 'ethereum/migrations');
// @ts-ignore
async function fun() {
    const files = await fs_extra_1.readdir(migDir);
    const solPath = path_1.join(__dirname, "../", 'ethereum/contracts', inputName + '.sol');
    const tsTestPath = path_1.join(__dirname, "../", 'ethereum/test', inputName + '.test.ts');
    const solTestPath = path_1.join(__dirname, "../", 'ethereum/test', inputName + '.test.sol');
    files.sort();
    if (command === "create" || command === "mk") {
        const migPath = path_1.join(__dirname, "../", 'ethereum/migrations', (parseInt(files[files.length - 1], 10) + 1) + "_" + inputName + '.js');
        fs_extra_1.writeFile(migPath, migrationTpl);
        fs_extra_1.writeFile(solPath, solContractTpl);
        fs_extra_1.writeFile(tsTestPath, testTsTpl);
    }
    else if (command === "rm") {
        const toDelete = files.find(file => file.includes(inputName));
        if (toDelete) {
            const migPath = path_1.join(__dirname, "../", 'ethereum/migrations', toDelete);
            if (await fs_extra_1.pathExists(migPath)) {
                fs_extra_1.remove(migPath);
            }
        }
        fs_extra_1.remove(solPath);
        fs_extra_1.remove(tsTestPath);
        fs_extra_1.remove(solTestPath);
    }
}
fun();
