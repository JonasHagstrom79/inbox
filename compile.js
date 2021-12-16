const path = require('path'); //creates a path to the .sol file
const fs = require('fs'); //filesystem module
const solc = require('solc'); //solidity compiler

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); //generates a path to inbox.sol
const source  = fs.readFileSync(inboxPath, 'utf8'); //reads th content of the file, state encoding

module.exports = solc.compile(source, 1).contracts[':Inbox']; //allows exporting the object, 1defines the number of contracts, [':']object bytecode property(contracts source)
//console.log(solc.compile(source, 1));