const path = require('path'); //creates a path to the .sol file
const fs = require('fs'); //filesystem module
const solc = require('solc'); //solidity compiler

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); //generates a path to inbox.sol
const source  = fs.readFileSync(inboxPath, 'utf8'); //reads th content of the file, state encoding

console.log(solc.compile(source, 1)); //also define the number of contracts
