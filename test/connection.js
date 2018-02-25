const mongoose = require('mongoose');


var db = mongoose.connection;

// before of mocha testing
before((done) => {
    mongoose.connect('mongodb://localhost/dbname');
    db.once('open' , () => {
        console.log('Open Success!!!');
        done();
    });

    db.on('error', (err) => {
        console.log("Error: " + err);
    }); 
})

