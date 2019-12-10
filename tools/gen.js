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
const migDir = path_1.join(__dirname, "../", 'ethereum/migrations');
async function fun() {
    const files = await fs_extra_1.readdir(migDir);
    const solPath = path_1.join(__dirname, "../", 'ethereum/contracts', inputName + '.sol');
    const tsTestPath = path_1.join(__dirname, "../", 'ethereum/test', inputName + '.test.ts');
    const solTestPath = path_1.join(__dirname, "../", 'ethereum/test', inputName + '.test.sol');
    files.sort();
    if (command === "create" || command === "mk") {
        const migPath = path_1.join(__dirname, "../", 'ethereum/migrations', (parseInt(files[files.length - 1], 10) + 1) + "_" + inputName + '.js');
        await Promise.all([
            fs_extra_1.writeFile(migPath, migrationTpl),
            fs_extra_1.writeFile(solPath, solContractTpl),
            fs_extra_1.writeFile(tsTestPath, testTsTpl),
        ]);
    }
    else if (command === "rm") {
        const toDelete = files.find(file => file.includes(inputName));
        if (toDelete) {
            const migPath = path_1.join(__dirname, "../", 'ethereum/migrations', toDelete);
            if (await fs_extra_1.pathExists(migPath)) {
                await fs_extra_1.remove(migPath);
            }
        }
        await Promise.all([
            fs_extra_1.remove(solPath),
            fs_extra_1.remove(tsTestPath),
            fs_extra_1.remove(tsTestPath.replace(".ts", ".js")),
            fs_extra_1.remove(solTestPath),
        ]);
    }
    console.log("Done");
}
fun();
