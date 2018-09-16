import { remove, writeFile } from 'fs-extra'
import { join } from 'path'

const command = process.argv[2]
const inputName = process.argv[3]
const normalizedName = inputName.replace(/^[\d_]+/, '')

console.assert(inputName, "Please provide a name, eg. 01_HelloWorld")

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

const testJsTpl = `
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
const jsTestPath= join(__dirname, "../", 'truffle/test', inputName + '.test.js')
const solTestPath=join(__dirname, "../", 'truffle/test', inputName + '.test.sol')

if (command === "create" || command === "mk") {
  writeFile(migPath, migrationJsTpl)
  writeFile(solPath, solContractTpl)
  writeFile(jsTestPath, testJsTpl)
}
else if (command === "rm") {
  remove(migPath)
  remove(solPath)
  remove(jsTestPath)
  remove(solTestPath)
}

