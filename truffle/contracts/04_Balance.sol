pragma solidity ^0.4.24;

contract Balance {

    address public owner;

    constructor() public payable
    {
        owner = msg.sender;
    }

    function getThisBalance() external constant returns (uint)
    {
        return owner.balance;
    }

    function getOwnersBalance() external constant returns (uint)
    {
        return owner.balance;
    }
}