pragma solidity ^0.5.0;

contract GasUsage {

    string greeting;

    constructor() public
    {
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}