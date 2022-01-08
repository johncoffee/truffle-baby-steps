"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const defaultCmd = "mk";
const commands = [defaultCmd, 'create', 'rm'];
const inputName = process.argv[3] || process.argv[2];
const command = (commands.indexOf(process.argv[2]) === -1) ? defaultCmd : process.argv[2];
console.log(command, inputName);
console.assert(inputName, "Please provide a contract name, eg. 01_HelloWorld");
const normalizedName = inputName.replace(/^[\d_]+/, '');
const solContractTpl = `
pragma solidity ^0.5.0;

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

contract('${normalizedName}', ([deployer, acc1]) => {

  it("deployed with migration script", async () => {
    const instance = await ${normalizedName}.deployed()
  })
  it("new instance ", async () => {
    const instance = await ${normalizedName}.new()
    // const a = await instance.someMethod()
    // assert.equal(a, b, "should")
  })

})
`.trim();
const testSolTpl = ``;
const migDir = (0, path_1.join)(__dirname, "../", 'ethereum/migrations');
async function fun() {
    const files = await (0, fs_extra_1.readdir)(migDir);
    const solPath = (0, path_1.join)(__dirname, "../", 'ethereum/contracts', inputName + '.sol');
    const tsTestPath = (0, path_1.join)(__dirname, "../", 'ethereum/test', inputName + '.test.ts');
    const solTestPath = (0, path_1.join)(__dirname, "../", 'ethereum/test', inputName + '.test.sol');
    files.sort();
    if (command === "create" || command === "mk") {
        const migPath = (0, path_1.join)(__dirname, "../", 'ethereum/migrations', (parseInt(files[files.length - 1], 10) + 1) + "_" + inputName + '.js');
        await Promise.all([
            (0, fs_extra_1.writeFile)(migPath, migrationTpl),
            (0, fs_extra_1.writeFile)(solPath, solContractTpl),
            (0, fs_extra_1.writeFile)(tsTestPath, testTsTpl),
        ]);
    }
    else if (command === "rm") {
        const toDelete = files.find(file => file.includes(inputName));
        if (toDelete) {
            const migPath = (0, path_1.join)(__dirname, "../", 'ethereum/migrations', toDelete);
            if (await (0, fs_extra_1.pathExists)(migPath)) {
                await (0, fs_extra_1.remove)(migPath);
            }
        }
        await Promise.all([
            (0, fs_extra_1.remove)(solPath),
            (0, fs_extra_1.remove)(tsTestPath),
            (0, fs_extra_1.remove)(tsTestPath.replace(".ts", ".js")),
            (0, fs_extra_1.remove)(solTestPath),
        ]);
    }
    console.log("Done");
}
fun();
