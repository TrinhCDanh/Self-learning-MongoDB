const mocha = require('mocha');
const assert = require('assert');

describe('run demo test with mocha', function() {
    it('Check Result', function() {
        assert(1+1 === 2);
    })
});

// create test/test.js
// npm test