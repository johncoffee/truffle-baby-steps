pragma solidity ^0.5.0;

contract CryptographicFunctions {
    
    constructor() public
    {
    }

    function HashThis(bytes memory input) public pure returns (bytes32 output) {
        output = keccak256(input);
        return output;
    }
}