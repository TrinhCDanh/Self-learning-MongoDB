const assert = require('assert');
var personModel = require('../02-schema-and-model/person');

describe('run demo insert data', () => {
    it('Check Result', (done) => {
        var character = new personModel({
            name: 'Sony'
        });

        character.save().then(() => {
            assert(character.isNew === false);
            done();
        });
    });
});