pragma solidity ^0.4.24;

contract SendSomeEth {
    address public owner;

    constructor() public
    {
        owner = msg.sender;
    }

    function() public payable
    {
        // contract is payable
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
}