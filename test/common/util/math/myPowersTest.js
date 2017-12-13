const assert = require('chai').assert;
var myPowers = require('../../../../src/common/util/math/myPowers.js');

const num1 = 3;
const num1String = "3";


describe('myPowers', function() {
    describe('toSquare', function() {
        it('toSquare("' + num1String + '") should return Square value of ' + num1, function() {
            let result = myPowers.toSquare(num1String);
            assert.equal(result, num1*num1);
        });
    });

    describe('toCube', function() {
        it('toCube("' + num1String + '") should return Square value of ' + num1, function() {
            let result = myPowers.toCube(num1String);
            assert.equal(result, num1*num1*num1);
        });

        it('toSquare should return type number', function() {
            let result = myPowers.toSquare(num1String);
            assert.typeOf(result, 'number');
        });
    });
});

