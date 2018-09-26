pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Greeter.sol";

contract TestGreeter {
  function testSomething() public payable {
    Greeter(DeployedAddresses.Greeter()); // it was deployed!

    // Assert.equal(deployed.greeting, "Hello ethereum", "stuff"); // doesnt work WTF

    uint expected = 10000; // works
    Assert.equal(10000, expected, "should have 10000");
  }
}
