const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dbname');

var db = mongoose.connection;
db.once('open' , () => {
    console.log('Open Success!!!')
});

db.on('error', (err) => {
    console.log("Error: " + err);
});
