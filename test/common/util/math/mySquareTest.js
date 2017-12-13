
const assert = require('chai').assert;
var mySquare = require('../../../../src/common/util/math/mySquare.js');

const num1 = 2;
const num1String = "2";

describe('mySquare', function() {
    describe('toString', function() {
        it('toString(' + num1 + ') should return string value of "' + num1String + '"', function() {
            let result = mySquare.toString(num1);
            assert.equal(result, num1String);
        });

        it('toString("' + num1String + '") should return string value of "' + num1String + '"', function() {
            let result = mySquare.toString(num1String);
            assert.equal(result, num1String);
        });
    });

    describe('toSquare', function() {
        it('toSquare("' + num1String + '") should return Square value of ' + num1, function() {
            let result = mySquare.toSquare(num1String);
            assert.equal(result, num1*num1);
        });
    });
});