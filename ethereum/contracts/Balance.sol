pragma solidity ^0.4.24;

contract Balance {

    address public owner;

    constructor() public payable
    {
        owner = msg.sender;
    }

    function getOwnersBalance() external constant returns (uint)
    {
        return owner.balance;
    }

    function getThisBalance() external constant returns (uint)
    {
        address c = this; // contract have a .balance property
        return c.balance;
    }

    function () public payable {}
}