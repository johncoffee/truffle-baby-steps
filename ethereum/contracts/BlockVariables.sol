pragma solidity ^0.4.24;

contract BlockVariables {
    
    constructor() public
    {
    }

    function getCurrentMinerAddress() public constant returns (address) // get CURRENT block miner's address,
    {														     // not necessarily the address of the miner when this block was born
        return block.coinbase;
    }

    function getCurrentDifficulty() public constant returns (uint)
    {
        return block.difficulty;
    }

    function getCurrentGaslimit() public constant returns (uint)  // the most gas that can be spent on any given transaction right now
    {
        return block.gaslimit;
    }

    function getCurrentBlockNumber() public constant returns (uint)
    {
        return block.number;
    }

    function getBlockTimestamp() public constant returns (uint) // returns current block timestamp in SECONDS (not ms) from epoch
    {
        return block.timestamp; 						 // also "now" == "block.timestamp", as in "return now;"
    }

}