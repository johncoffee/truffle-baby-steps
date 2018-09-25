import { remove, writeFile } from 'fs-extra'
import { join } from 'path'

const defaultCmd = "mk"
const commands:string[] = [defaultCmd, 'create', 'rm']
const inputName = process.argv[3] || process.argv[2]
const command = (commands.indexOf(process.argv[2]) > -1) ? process.argv[2] : defaultCmd

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

const migrationTpl = `
import Deployer = Truffle.Deployer
import Migration = Truffle.Migration
import Accounts = Truffle.Accounts

const c = artifacts.require("./${normalizedName}.sol")

function deployContract(deployer:Deployer, network: string, accounts: Accounts) {
  deployer.deploy(c)
}

module.exports = (deployContract as Migration)
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

const migPath =   join(__dirname, "../", 'truffle/migrations', inputName + '.ts')
const solPath =   join(__dirname, "../", 'truffle/contracts', inputName + '.sol')
const tsTestPath= join(__dirname, "../", 'truffle/test', inputName + '.test.ts')
const solTestPath=join(__dirname, "../", 'truffle/test', inputName + '.test.sol')

if (command === "create" || command === "mk") {
  writeFile(migPath, migrationTpl)
  writeFile(solPath, solContractTpl)
  writeFile(tsTestPath, testTsTpl)
}
else if (command === "rm") {
  remove(migPath)
  remove(solPath)
  remove(tsTestPath)
  remove(solTestPath)
}

