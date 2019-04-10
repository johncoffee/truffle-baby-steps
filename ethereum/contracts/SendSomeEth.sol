pragma solidity ^0.5.0;

contract SendSomeEth {
    address public owner;
    uint[] payments;


    constructor() public
    {
        owner = msg.sender;

        payments = new uint[](12);

        payments[0] = 3 ether;  // jan 2019
        payments[1] = 4 ether;  // feb 2019

    }

    function() payable external
    {
        // contract is payable
    }

    function getOwnersBalance() external view returns (uint)
    {
        return owner.balance;
    }

    function getThisBalance() external view returns (uint)
    {
        address c = address(this); // contract have a .balance property
        return c.balance;
    }

    function forwardMoney(address payable _to) external {
        _to.transfer(33333 wei);
    }

    function forwardMoneyFromArray(uint pos, address payable other) external {
        uint money = payments[pos];
        other.transfer(money);
        payments[pos] = 0;
    }
}
