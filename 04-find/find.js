var mongoose = require('mongoose');
var personModel = require('../02-schema-and-model/person');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/dbname');

personModel.findOne({name: 'Toshiba'}, (err, result) => {
    if (err) return handleError(err);
    console.log(`Result: ${result.name + result._id}`);
});

var character = new personModel({
    name: 'Dell'
});

character.save().then(() => {
    var id = character._id;
    personModel.findOne({_id: id}, (err, result) => {
        if (err) return handleError(err);
        console.log(`Result: ${result.name}`);
    }); 
});

