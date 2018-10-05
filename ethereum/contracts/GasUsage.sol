pragma solidity ^0.4.24;

contract GasUsage {

    string greeting;

    constructor() public
    {
    }

    function setGreeting(string _greeting) public {
        greeting = _greeting;
    }
}