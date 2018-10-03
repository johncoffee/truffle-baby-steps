import { ensureFile, pathExists, readdir, remove, writeFile } from 'fs-extra'
import { join } from 'path'

const defaultCmd = "mk"
const commands:string[] = [defaultCmd, 'create', 'rm']
const inputName = process.argv[3] || process.argv[2]
const command = (commands.indexOf(process.argv[2]) === -1) ?  defaultCmd : process.argv[2]

console.debug(command, inputName)

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

const migDir = join(__dirname, "../", 'ethereum/migrations')

// @ts-ignore
async function fun() {
  const files:string[] = await readdir(migDir)

  const solPath =   join(__dirname, "../", 'ethereum/contracts', inputName + '.sol')
  const tsTestPath= join(__dirname, "../", 'ethereum/test', inputName + '.test.ts')
  const solTestPath=join(__dirname, "../", 'ethereum/test', inputName + '.test.sol')

  files.sort()

  if (command === "create" || command === "mk") {
    const migPath =   join(__dirname, "../", 'ethereum/migrations', (parseInt(files[files.length-1], 10) + 1) + "_" + inputName + '.js')
    writeFile(migPath, migrationTpl)
    writeFile(solPath, solContractTpl)
    writeFile(tsTestPath, testTsTpl)
  }
  else if (command === "rm") {
    const toDelete = files.find(file => file.includes(inputName))

    if (toDelete) {
      const migPath = join(__dirname, "../", 'ethereum/migrations', toDelete)
      if (await pathExists(migPath)) {
        remove(migPath)
      }
    }

    remove(solPath)
    remove(tsTestPath)
    remove(solTestPath)
  }
}

fun()
