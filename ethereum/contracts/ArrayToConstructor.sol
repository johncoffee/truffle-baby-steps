pragma solidity ^0.5.0;

contract ArrayToConstructor {
    
    constructor(address[] memory nicePeople) public
    {
        uint8 x = 0;
        address badAddress = address(0);
        while(x < nicePeople.length)
        {
            bool okAddress = nicePeople[x] != badAddress;
            require(okAddress, "Nice people cannot be address(0)");
            x++;
        }
    }   
}