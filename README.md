## Truffle baby steps

This is a framework for getting started with Solidity, deployment of contracts, and unit testing.
Basically what the [Truffle](http://truffleframework.com/) framework does best.

The approach is the same as fiveogit's great repo [solidity-baby-steps](https://github.com/fivedogit/solidity-baby-steps)

Truffle/web3.js is under heavy development - does it still compile?:  
[![CircleCI](https://circleci.com/gh/johncoffee/truffle-baby-steps.svg?style=svg)](https://circleci.com/gh/johncoffee/truffle-baby-steps)


# Let's learn Solidity with the Truffle framework!

  1. Download/clone this code repository
    a. Navigate to the folder in a terminal/command prompt 
  2. Install the dependencies
    See [Installing](#Installing)
  3. Create a new contract and unit tests
    a. Add `contracts/HelloWorld.sol` and `test/HelloWorld.test.ts`
    b. Optional: Use `node tools/gen.js HelloWorld` to generate a contract called HelloWorld
  4. Run it! See [The development loop](#The development loop)


## The case for typescript

The web3.js and Truffle frameworks are very comprehensive in functionality, they bundle many other libraries, it is only rational to have your editor auto-complete and type-check as you write/learn. Types _are_ documentation; Self-explanatory code is easier to read and navigate. 


## The development loop

Start a local blockchain using Ganache `npm run ganache` 

The general way to develop and continously run the tests goes like this:
  1. Try entering `ethereum/` and run `npx truffle` to see Truffles help menu appear, it should work
  2. Place a new smart contract in `contracts/` eg. `HelloWorld.sol`
  3. Run `npx truffle compile` to compile the solidity (in the `ethereum/` folder), fingers crossed it compiles!!?
  4. When the solidity compiles, you can then build TypeScript interfaces: `npm run type-contracts`
  5. Write unit tests in TypeScript, have your favorite editor compile it, or run `npm run compile-tests` manually
  6. Run `npx truffle test` to run Truffle unit tests (in the `ethereum` folder)


## Installing 

  1. We need to install NodeJS and NPM
  2. Install the dependencies with `npm install` (no global dependencies required)

