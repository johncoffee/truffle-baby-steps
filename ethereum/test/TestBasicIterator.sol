pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/BasicIterator.sol";

contract TestBasicIterator {
  function testSomething() public {

    BasicIterator deployed = BasicIterator(DeployedAddresses.BasicIterator());

    // cant make a reference to the array
//    uint8[] storage integers = deployed.integers; // not possible
    // so instead we use a method to retrieve the number
    uint actual = deployed.getNumberAt(0);
    uint expected = 0;
    Assert.equal(actual, expected, "should be able to access the public array");
  }

}
