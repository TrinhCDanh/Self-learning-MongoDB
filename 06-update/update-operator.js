var mongoose = require('mongoose');
var personModel = require('../02-schema-and-model/person');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/dbname');

var character = new personModel({
    name: 'Danh',
    height: 177
});

character.save().then(() => {
    personModel.update({_id: character._id}, { $inc:{height: 3} }).then(() => {
        console.log('Done');
    });
});

// https://docs.mongodb.com/manual/reference/operator/update/