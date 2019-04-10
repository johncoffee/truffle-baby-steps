pragma solidity ^0.5.0;

contract Bytes {

    bytes32[] public status;

    constructor() public {
        status = new bytes32[](12);
    }

    function setStatus(uint idx, bytes32 _status) external {
        bytes32 b = status[idx];
        require(b == 0x0, "status was already set");

        status[idx] = _status;
    }

    function getStatus(uint idx) external returns(bytes32) {
        bytes32 b = status[idx];
        return b;
    }

    function getNotEmpty(uint idx) external returns(bytes32) {
        bytes32 b = status[idx];
        require(b != 0x0, "status was not set");
        return b;
    }

}
