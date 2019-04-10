pragma solidity ^0.5.0;

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