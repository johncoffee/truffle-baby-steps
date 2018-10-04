

### Truffle baby steps
This is a framework for getting started with Solidity, deployment of contracts, and unit testing.
Basically what the [Truffle](http://truffleframework.com/) framework does best.

The approach is the same as fiveogit's great repo [solidity-baby-steps](https://github.com/fivedogit/solidity-baby-steps)


# Let's learn some Solidity with the Truffle framework!

  1. Download/clone this code repository
    a. Navigate to the folder in a terminal/command prompt 
  2. Install the dependencies
    See [Installing](#Installing)
  3. Create a new contract and unit tests
    a. Either do it manually by adding eg. `contracts/01_HelloWorld.sol` and `test/01_HelloWorld.test.js`
    b. Or use my convenient tool eg. `node tools/gen.js 01_HelloWorld`
  4. Run it! See [The development loop](#The development loop)


## The development loop

Start a local blockchain using Ganache `npm run ganache` (short for `node node_modules/ganache-cli/build/cli.node.js`)

When you have added new/changed tests:
  1. Enter the `/ethereum` folder
  2. `truffle compile` to see if the Solidity compiles   
    a. Pro tip: Set up WebStorm to watch the files and execute `truffle compile` on file changes
  3. Make sure the typescript compiles `typechain --target=truffle --outDir=./build "build/contracts/**/*.json"`
  4. `truffle migrate --reset` to deploy contracts
  5. `truffle test` to run the tests

After the contracts has been deployed you just need to write more javascript tests, and run `truffle test`


## Installing 

  1. We need to install NodeJS and NPM
  2. Install `truffle` globally 
      a. Run `npm i -g truffle`

It worked last time with truffle 4.1.14 and node 8.11.3 npm 5.6.0, typescript 3.0.3


# Dogma

No complicated tests; only small test cases that explore the functionality of Solidity, contract interfaces, and Truffle.