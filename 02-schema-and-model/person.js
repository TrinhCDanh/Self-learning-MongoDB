var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personSchema = new Schema({
    name: String,
    age: Number,
    height: Number,
    weight: Number,
    gender: Boolean
});

var personModel = mongoose.model('human', personSchema); 

module.exports = personModel;
