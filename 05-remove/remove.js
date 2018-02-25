var mongoose = require('mongoose');
var personModel = require('../02-schema-and-model/person');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/dbname');

personModel.findOneAndRemove({name: 'Dells'}, (err) => {
    if (err) return handleError(err);
    console.log('Success');
});

