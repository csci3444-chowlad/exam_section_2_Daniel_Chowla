
const assert = require('chai').assert;
var myCube = require('../../../../src/common/util/math/myCube.js');

const num1 = 3;
const num1String = "3";

describe('myCube', function() {
    describe('toString', function() {
        it('toString(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = myCube.toString(num1);
            assert.equal(result, num1String);
        });

        it('toString("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = myCube.toString(num1String);
            assert.equal(result, num1String);
        });
    });

    describe('toCube', function() {
        it('toCube("' + num1String + '") should return Square value of ' + num1, function() {
            let result = myCube.toCube(num1String);
            assert.equal(result, num1*num1*num1);
        });

        it('toCube("' + num1 + '") should return Square value of ' + num1, function() {
            let result = myCube.toCube(num1);
            assert.equal(result, num1*num1*num1);
        });

        it('toCube should return type number', function() {
            let result = myCube.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });
});