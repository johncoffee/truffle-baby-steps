pragma solidity ^0.4.24;

contract Greeter
{
    address public creator;
    string public greeting;

    constructor(string _greeting) public
    {
        creator = msg.sender;
        greeting = _greeting;
    }

    function greet() public constant returns (string)
    {
        return greeting;
    }

    function setGreeting(string _newgreeting) public
    {
        greeting = _newgreeting;
    }
}
