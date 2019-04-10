pragma solidity ^0.5.0;

contract Destruct {

    address creator;     // At first, an empty "address"-type variable of the name "creator". Will be set in the constructor.
    string greeting;     // At first, an empty "string"-type variable of the name "greeting". Will be set in constructor and can be changed.

    modifier ownerOnly {
        require(msg.sender == creator);
        _;
    }

    constructor() public
    {
        creator = msg.sender;
    }

    function setOwner() ownerOnly public {
        creator = msg.sender;
    }

    function kill() ownerOnly public {
        selfdestruct(msg.sender);    // kills this contract and sends remaining funds back to creator
    }

    function() payable public {
    }
}