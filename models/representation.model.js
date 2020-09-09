var mongoose = require('mongoose');

var representativeSchema = new mongoose.Schema({
    fullName:{
        type: String
    },
    Age:{
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    address:{
        type: String
    },
    Gender:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: String
    },
    hospital: {
        type: String
    },
    position:{
        type: String
    }
})

module.exports = mongoose.model('representation', representativeSchema, 'representation')