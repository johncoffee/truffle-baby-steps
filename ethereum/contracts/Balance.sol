pragma solidity ^0.5.0;

contract Balance {

    address public owner;

    constructor() public payable
    {
        owner = msg.sender;
    }

    function getOwnersBalance() external view returns (uint)
    {
        return owner.balance;
    }

    function getThisBalance() external view returns (uint)
    {
        address c = address(this);
        return c.balance;
    }

    function () payable external {}
}
