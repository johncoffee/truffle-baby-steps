pragma solidity ^0.4.24;

contract ReturnPrimitives {
    
    constructor() public
    {
    }

    function giveString() public pure returns(string _theAnswer) {
        return "theAnswer";
    }

    function giveBigUint() public pure returns(uint _theAnswer) {
        return 42;
    }

    function giveBigInt() public pure returns(int _theAnswer) {
        return -42;
    }

    function giveThreeValues() public pure returns(uint _one, string _two, bytes1 _three) {
        return (1, "a", 0x42);
    }
}