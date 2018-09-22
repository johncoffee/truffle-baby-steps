

# Truffle baby steps
This is a framework for getting started with Solidity, deployment of contracts, and unit testing.
Basically what [Truffle](http://truffleframework.com/) does best.

The approach is the same as fiveogit's [solidity-baby-steps](https://github.com/fivedogit/solidity-baby-steps)

# Let's learn some Solidity with the Truffle framework!

  1. Download/clone this code repository
    a. Save it, and navigate to the folder in a terminal 
  2. Install the dependencies
    See [Installing](##Installing)
  3. Create a new contract and unit tests
    a. Either do it manually by adding eg. `contracts/01_HelloWorld.sol` and `test/01_HelloWorld.test.js` (in the `/truffle` folder)
    b. Or use my convenient tool eg. `node tools/gen.js mk 01_HelloWorld`


## The development loop

Start a local blockchain using Ganache `npm run ganache`

When you have added new/changed tests:
  0. Enter the `/truffle` folder
  1. `truffle compile` to see if the Solidity compiles..
  2. `truffle migrate --reset` to deploy contracts
  3. `truffle test` to run the tests

After the contracts has been deployed you just need to write more javascript tests, and run `truffle test`

## Installing 

  1. We need to install NodeJS and NPM
  2. Install `truffle`, and `typescript` globally. 
      a. Run `npm i -g truffle typescript`

It worked last time with truffle 4.1.14 and node 8.11.3 npm 5.6.0, typescript 3.0.3
