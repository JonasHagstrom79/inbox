const HDWalletProvider = require('@truffle/hdwallet-provider'); //our wallet
const Web3 = require('web3'); //web3 constructor
const { interface, bytecode } = require('./compile'); //from our compile script


//setup for HDWalletprovider
const provider = new HDWalletProvider(
    'tennis make claw mad mosquito gorilla slab wide govern angry bomb turtle', //acount mnominic
    'https://rinkeby.infura.io/v3/f4a45206e8ba4badada0e2f8197ce831' //link to the testnetwork
);
//connection to the network
const web3 = new Web3(provider);