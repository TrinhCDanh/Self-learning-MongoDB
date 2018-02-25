var mongoose = require('mongoose');
var personModel = require('../02-schema-and-model/person');
var db = mongoose.connection;

mongoose.connect('mongodb://localhost/dbname');

personModel.findOneAndUpdate({name: 'HP'}, {name: 'Lenovo'}).then(() => console.log('ok'));