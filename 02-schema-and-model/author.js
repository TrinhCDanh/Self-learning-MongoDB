const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    pageNumber: Number
});

var authorSchema = new Schema({
    name: String,
    age: Number,
    books: [bookSchema]
});

var authorModel = mongoose.model('author', authorSchema);

module.exports = authorModel;