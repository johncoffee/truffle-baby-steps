pragma solidity ^0.4.4;

contract SimpleJoe {
    uint public answer = 42;

    constructor() public {
    }
}

contract ArrayOfContract {
    SimpleJoe[] public list;

    constructor() public {
    }

    function set(SimpleJoe joe, uint index) public {
        require(index < list.length, "index was greater than list length");
        list[index] = joe;
    }

    function add(SimpleJoe joe) public {
        list.push(joe);
    }

    function removeLast() public
//    returns(SimpleJoe)
    {
//        SimpleJoe storage joe = list[list.length-1];
//        list.pop(); // solidity 0.5
    }

    function countJoes() public returns (uint) {
        return list.length;
    }
}

// NOTES 1, 2, 3
// because "integers" is declared as uint8[10], getArray() must return type uint8[10].
// setArray(...) does not require uint8[10] input, but you'd then have to check to make sure the two arrays were of the same type and length.

// If "integers" were declared as uint8[] (dynamic length), then I'd have used getArray() and setArray() with uint8[] instead.
// setArray would then obviously require a length check for compatibility.

/*

> arrayrr.getValue(3);
1
> arrayrr.setArray.sendTransaction([0,1,2,3,4,5,6,7,8,9], {from:eth.coinbase});
"0xe54bf5d62f6b45f8761d5bcdd7d919bf1b51eade0ed5dc43bea828f927731fdb"
> arrayrr.getArraySettingResult();
-1
> arrayrr.getArraySettingResult();
-1
> arrayrr.setArray.sendTransaction([0,1,2,3,4,5,6,7,8,9], {from:eth.coinbase,gas:1000000});
"0x3e0bbb151e10a316fbc201ca4e78ebd4c1f6bc827f83d72cff39e5dfb0aba18d"
> arrayrr.getArraySettingResult();
1
> arrayrr.getArray();
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

*/
