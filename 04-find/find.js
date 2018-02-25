var mongoose = require('mongoose');
var personModel = require('../02-schema-and-model/person');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/dbname');

personModel.findOne({name: 'Toshiba'}, (err, result) => {
    if (err) return handleError(err);
    console.log(`Result: ${result.name + result._id}`);
});