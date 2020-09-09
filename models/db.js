const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/hospitanica', { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded!');
    } else {
        console.log('Error in DB connection : ' + err);
    }
});

mongoose.connection.on('open', function() {
    mongoose.connection.db.listCollections().toArray(function(err, data) {
        if (err) {
            console.log(err);
        } else {
            data.forEach(function(filter) {
                console.log(filter.name);
            })
        }
    });
});

require('./user.model');
require('./medicalreport.model');
require('./watchlist.model');
require('./schedulemanagement.model');
require('./listConsultant.model');
require('./representation.model');