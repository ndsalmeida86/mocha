const assert = require('chai').assert;
const app = require('../app');

let sayHelloResult = app.sayHello();
let getDateResult = app.getDate();
let addNumbersResult = app.addNumbers(5,5);

describe('App', function() {
    describe('sayHello()', function() {
        it('sayHello should return hello', function() {
            assert.equal(sayHelloResult, 'Hello');
        });
    
        it('sayHello should return type string', function() {
            assert.typeOf(sayHelloResult, 'string');
        });
    });    

    describe('getDate()', function() {
        it('getDate should return date', function() {
            assert.equal(getDateResult, new Date().toString());
        });
    
        it('getDate should return type string', function() {
            assert.typeOf(getDateResult, 'string');
        });
    });    

    describe('addNumbers()', function() {
        it('addNumbers should be above 5', function() {
            assert.isAbove(addNumbersResult, 9);
        });
    
        it('addNumbers should return type number', function() {
            assert.typeOf(addNumbersResult, 'number');
        });
    });    
});