pragma solidity ^0.5.0;

contract NotPayable {
    
    constructor() public
    {
    }

    function ReturnMeGas() public payable {
        revert("Return me gas.");
    }
}