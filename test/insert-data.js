var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');

const assert = require('assert');
var personModel = require('../02-schema-and-model/person');

describe('run demo insert data', () => {
    it('Check Result', (done) => {
        var character = new personModel({
            name: 'TCD'
        });

        character.save().then(() => {
            assert(character.isNew === false);
            done();
        });
    });
});