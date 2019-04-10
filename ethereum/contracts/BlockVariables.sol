pragma solidity ^0.5.0;

contract BlockVariables {
    
    constructor() public
    {
    }

    function getCurrentMinerAddress() public view returns (address) // get CURRENT block miner's address,
    {														     // not necessarily the address of the miner when this block was born
        return block.coinbase;
    }

    function getCurrentDifficulty() public view returns (uint)
    {
        return block.difficulty;
    }

    function getCurrentGaslimit() public view returns (uint)  // the most gas that can be spent on any given transaction right now
    {
        return block.gaslimit;
    }

    function getCurrentBlockNumber() public view returns (uint)
    {
        return block.number;
    }

    function getBlockTimestamp() public view returns (uint) // returns current block timestamp in SECONDS (not ms) from epoch
    {
        return block.timestamp; 						 // also "now" == "block.timestamp", as in "return now;"
    }

}
