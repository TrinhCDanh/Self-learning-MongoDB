var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/testdb');

var animalSchema = new Schema({
    name: String,
    weight: Number
});

var Animal = mongoose.model('Animal', animalSchema); 

var dog = new Animal(
    { name: 'Shiba', weight: 9 }
);

dog.save().then(() => console.log('Success'));