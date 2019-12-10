pragma solidity ^0.5.0;

contract StringCompare {

    string constant someWords = "";

    function Compare() public pure returns (bool _isEqual) {
        bool isSame = (keccak256("my name") == keccak256("my name"));
        return (isSame); // must have paranthesis!
    }

   // function CompareFromStorage () public pure {
   //     assert(keccak256(someWords) == keccak256("my name"));
   // }
}