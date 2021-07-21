// contracts/Saiyan.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SaiyanToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("Saiyan", "DBZ") {
        _mint(msg.sender, initialSupply);
    }
}