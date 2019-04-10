pragma solidity ^0.5.0;

contract ReturnPrimitives {
    
    constructor() public
    {
    }

    function giveString() public pure returns(string memory _theAnswer) {
        return "theAnswer";
    }

    function giveBigUint() public pure returns(uint _theAnswer) {
        return 42;
    }

    function giveBigInt() public pure returns(int _theAnswer) {
        return -42;
    }

    function giveThreeValues() public pure returns(uint _one, string memory _two, bytes1 _three) {
        return (1, "a", 0x42);
    }

    function giveAddressAndBytes () public view
        returns(address _addr1, address _addr2, address _addr3)
    {
//        return (0x97e657a4951a82e18fb96660a31f51d23032db50d6d43daa30d42a6ab7f4e322); // doesn't work
//        address addr = 0x97e657a4951a82e18fb96660a31f51d23032db50d6d43daa30d42a6ab7f4e322; // doesnt work
//        address addr = "0x97e657a4951a82e18fb96660a31f51d23032db50d6d43daa30d42a6ab7f4e322"; // doesnt work

        uint someNumbers = 420000000000000;
        address addr1 = address(someNumbers);

//        No longer possible
//        bytes20 someBytes = 0xf6d5e1d56f56677888f5f441122483f6ff00;
//        address addr2 = address(someBytes);
         address addr2;

//        No longer possible
//        address addr2Alias = address(bytes20(0xf6d5e1d56f56677888f5f441122483f6ff00)); // one-liner hardcoded address
//        require(addr2Alias == addr2, "These two should be the same");

        address addr3 = address(this);

        return (addr1, addr2, addr3);
    }
}