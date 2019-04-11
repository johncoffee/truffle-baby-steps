

### Truffle baby steps
This is a framework for getting started with Solidity, deployment of contracts, and unit testing.
Basically what the [Truffle](http://truffleframework.com/) framework does best.

The approach is the same as fiveogit's great repo [solidity-baby-steps](https://github.com/fivedogit/solidity-baby-steps)

Because Truffle/web3.js is under heavy development, I've added CI to help visualize if it still installs and compiles [![CircleCI](https://circleci.com/gh/johncoffee/truffle-baby-steps.svg?style=svg)](https://circleci.com/gh/johncoffee/truffle-baby-steps)


# Let's learn some Solidity with the Truffle framework!

  1. Download/clone this code repository
    a. Navigate to the folder in a terminal/command prompt 
  2. Install the dependencies
    See [Installing](#Installing)
  3. Create a new contract and unit tests
    a. Add `contracts/HelloWorld.sol` and `test/HelloWorld.test.ts`
    b. Use my convenient tool eg. `node tools/gen.js HelloWorld`
  4. Run it! See [The development loop](#The development loop)


## The case for typescript

The web3.js and Truffle frameworks are very comprehensive in functionality, they wrap many other libraries, it is only rational to have your editor auto-complete and type-check as you write/learn. Types _are_ documentation; Self-explanatory code is easier to read up on, and navigate around in. The frameworks are under development at changes quite often, it is a great help to have TypeScript aid you when the APIs changes.


## The development loop

Start a local blockchain using Ganache `npm run ganache` 

When you have added new/changed tests:
  0. Try entering `ethereum/` and run `npx truffle` to see Truffles help menu appear
  0. Write a new smart contract, place it in `ethereum/contracts`. Add a migration script in `migrations/` if the contract has constructor arguments
  1. Run `npx truffle compile` to compile the solidity (in the `ethereum/` folder)
  2. Only when the solidity compiles, you can build TypeScript interfaces for the contracts to be used in unit tests: `npm run type-contracts`
  3. Write unit tests in TypeScript, have you editor compile it or run `npm run compile-tests` manually
  4. Run `npx truffle test` to run Truffle unit tests (in the `ethereum/` folder)


## Installing 

  1. We need to install NodeJS and NPM
  2. Install the dependencies with `npm install` (no global dependencies required)


# Dogma

No complicated tests; only small test cases that explore the functionality of Solidity, contract interfaces, and Truffle.
