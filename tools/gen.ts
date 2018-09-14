import { writeFile } from 'fs-extra'
import { join } from 'path'

const contractName = process.argv[2]
const solContractName = contractName.replace(/^[\d_]+/, '')

console.assert(contractName, "Please provide a name, eg. 01_HelloWorld")

const solContractTpl = `
pragma solidity ^0.4.24;

contract ${solContractName} {
    
    constructor() public
    {
    }   
}
`.trim()

const migrationJsTpl = `
const c = artifacts.require("./${solContractName}.sol")

module.exports = function(deployer) {
  deployer.deploy(c)
}
`.trim()

const testJsTpl = ``
const testSolTpl = ``

const solPath = join(__dirname, "../", 'truffle/contracts', contractName + '.sol')
const migPath = join(__dirname, "../", 'truffle/migrations', contractName + '.js')

writeFile(migPath, migrationJsTpl)
writeFile(solPath, solContractTpl)