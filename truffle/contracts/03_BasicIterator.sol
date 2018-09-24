pragma solidity ^0.4.24;

contract BasicIterator {

    uint8[10] public integers;

    constructor() public {
        uint8 x = 0;
        while (x < integers.length) {
            integers[x] = x;
            x++;
        }
    }

    function getSum() external constant returns (uint8) // if its not external, it will not be found in the javascript representation
    {
        uint8 sum = 0;
        uint8 x = 0;
        while(x < integers.length)
        {
            sum = sum + integers[x];
            x++;
        }
        return sum;
    }

    function getNumberAt(uint8 _idx) external constant returns (uint8) // if its not external, it will not be found in the javascript representation
    {
        return integers[_idx];
    }

}