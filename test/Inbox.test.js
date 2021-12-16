const assert = require('assert'); //
const ganache = require('ganache-cli'); //local ethereum test network
const Web3 = require('web3'); //a constructor function
//local instance of web3
const web3 = new Web3(ganache.provider());
//Gets the contract from compile.js
const { interface, bytecode } = require('../compile');


let accounts;
let inbox;

beforeEach(async () => {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts();

    //Use one of those accounts to deploy
    //-->the contract<--
    //Teaches web3 about what methods an Inbox contract has
    inbox = await new web3.eth.Contract(JSON.parse(interface)) //C is a constructor,
    //Tells web3 that ew want todeploy a new copy of this contract
    .deploy({ data: bytecode, arguments: ['Hi there!']}) //deploys on the contract above, data and an array(inbox.sol)
    //Instructs web3 to send out a transaction that creates this contract
    .send({ from: accounts[0], gas: '1000000'})
});

describe('Inbox', () =>{ //So that the beforeEach statement atleast runs one time
    it('deploys a contract', () => {
        console.log(inbox);
    });
});



//Test with Mocha
/* class Car{
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
} */
//Mocha
/* let car; //To make it accessible to the it-statements

beforeEach(()=> {
    car =  new Car();
});
describe('Car', () => { //Arrowfunction with all test statements(it) for class 'Car'
    
    it('can park', () =>{ //test setup and assertion logic inside the arrow function
        //const car =  new Car();//Double call, use beforeEach to not repeat yourself
        assert.equal(car.park(), 'stopped'); //If the test is equal it fill pass
    }); 

    it('can drive', () =>{
        //const car =  new Car();
        assert.equal(car.drive(), 'vroom');
    });
}); */ //Shift+Alt+A