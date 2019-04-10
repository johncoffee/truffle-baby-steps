pragma solidity ^0.5.0;

contract Greeter
{
    address public creator;
    string public greeting;

    constructor(string _greeting) public
    {
        creator = msg.sender;
        greeting = _greeting;
    }

    function greet() public view returns (string)
    {
        return greeting;
    }

    function setGreeting(string _newgreeting) public
    {
        greeting = _newgreeting;
    }
}
