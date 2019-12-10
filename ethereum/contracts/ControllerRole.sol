pragma solidity ^0.5.0;

// ERC-1644 implementation

contract ControllerRole {

  address[] private _controllers;

  constructor(address[] memory defaultControllers) public {
    _controllers = defaultControllers;
  }

  function setControllers(address[] calldata controllers) external {
    _controllers = controllers;
  }

  function getControllers() external view returns(address[] memory) {
    return _controllers;
  }
}
