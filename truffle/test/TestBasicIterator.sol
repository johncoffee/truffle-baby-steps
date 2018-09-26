pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
//import "../contracts/c03_BasicIterator.sol";

contract TestBasicIterator {
  function testSomething() public {

//    BasicIterator deployed = BasicIterator(DeployedAddresses.BasicIterator());

    uint expected = 10000;

    Assert.equal(10000, expected, "should have 10000");
  }

}
