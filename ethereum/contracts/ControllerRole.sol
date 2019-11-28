pragma solidity ^0.5.0;

// ERC-1644 implementation

contract ControllerRole {

  bool private _isControllable;
  mapping(address => bool) private _isController;
  address[] private _controllers;

  constructor(address[] memory defaultControllers) {
    controllers = defaultControllers;
  }

  function isController(address addr) returns (bool) {
    return _isController[addr];
  }

  function controllers() external view returns (address[] memory) {
    return _controllers;
  }

  function isControllable() external view returns (bool) {
    return _isControllable;
  }

  function setControllable(bool _controllable) external onlyOwner {
    _isControllable = _controllable;
  }

  function setControllers(address[] calldata controllers) external onlyOwner {
    _controllers = controllers;
  }

}
