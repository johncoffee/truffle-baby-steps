import { remove, writeFile } from 'fs-extra'
import { join } from 'path'

const command = process.argv[2]
const inputName = process.argv[3]

console.assert((command === "create" || command === "mk" || command === "rm"), "Please provide a command, eg. `create 01_HelloWorld`")
console.assert(inputName, "Please provide a contract name, eg. 01_HelloWorld")

const normalizedName = inputName.replace(/^[\d_]+/, '')

const solContractTpl = `
pragma solidity ^0.4.24;

contract ${normalizedName} {
    
    constructor() public
    {
    }   
}
`.trim()

const migrationJsTpl = `
const c = artifacts.require("./${normalizedName}.sol")

function deployContract(deployer) { 
  deployer.deploy(c)
}

module.exports = deployContract
`.trim()

const testTsTpl = `
const ${normalizedName} = artifacts.require("${normalizedName}")

contract('${normalizedName}', function(accounts) {

  it("should ", async () => {
    const instance = await ${normalizedName}.deployed()
    // const a = await instance.fieldName.call()
    // assert.equal(a, b, "")
  })

})
`.trim()

const testSolTpl = ``

const migPath =   join(__dirname, "../", 'truffle/migrations', inputName + '.js')
const solPath =   join(__dirname, "../", 'truffle/contracts', inputName + '.sol')
const tsTestPath= join(__dirname, "../", 'truffle/test', inputName + '.test.ts')
const solTestPath=join(__dirname, "../", 'truffle/test', inputName + '.test.sol')

if (command === "create" || command === "mk") {
  writeFile(migPath, migrationJsTpl)
  writeFile(solPath, solContractTpl)
  writeFile(tsTestPath, testTsTpl)
}
else if (command === "rm") {
  remove(migPath)
  remove(solPath)
  remove(tsTestPath)
  remove(solTestPath)
}

