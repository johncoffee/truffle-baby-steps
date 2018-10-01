pragma solidity ^0.4.24;

import "./StateMachine.sol";


contract StateMachineIssue is StateMachine {

    bytes32 constant STATE1 = "open";
    bytes32 constant STATE2 = "resolved";
    bytes32 constant STATE3 = "closed";

    constructor() public {
        setupStates();
    }

    /* The 'checkAllowed' modifier will perform conditional transitions
    and check that the function is allowed at the current state */

    function() public checkAllowed {
        // Do something
    }

    function foo() public checkAllowed {
        // Do something
    }

    function bar() public checkAllowed {
        // Do something
    }

    function setupStates() internal {
        setStates([
            STATE1, STATE2, STATE3,
            0,0,0 // unused slots
        ]);

        allowFunction(STATE1, this.foo.selector); // functions have their selectors available via .selector
        allowFunction(STATE2, this.bar.selector);
        allowFunction(STATE3, 0); // Allow fallback function. 0 is the contract?

        //        addCallback(STATE1, onState1);
        //        addCallback(STATE2, onState2);
        //        addCallback(STATE3, onState3);

        //        addStartCondition(STATE4, shouldState4Start);
    }

    // Callback when entering each state
    //    function onState1() internal { /* Do something */ }
    //    function onState2() internal { /* Do something */ }
    //    function onState3() internal { /* Do something */ }

    //    function shouldState4Start(bytes32) internal returns(bool) {
    //        return true;
    //    }

}