pragma solidity ^0.4.24;

contract NotPayable {
    
    constructor() public
    {
    }

    function() private {
        // should throw an error if called
    }

    function ReturnMeGas() public payable {
        revert("Return me gas.");
    }
}