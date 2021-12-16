const assert = require('assert'); //
const ganache = require('ganache-cli'); //local ethereum test network
const Web3 = require('web3'); //a constructor function
//local instance of web3
const web3 = new Web3(ganache.provider());

//Test with Mocha
class Car{
    park(){
        return 'stopped';
    }

    drive(){
        return 'vroom';
    }
}
//Mocha
let car; //To make it accessible to the it-statements

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
});