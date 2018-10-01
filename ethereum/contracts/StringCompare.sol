pragma solidity ^0.4.24;

contract StringCompare {

    function StaticCompare() public pure
    {
        assert(keccak256("my name") == keccak256("my name"));
    }
}