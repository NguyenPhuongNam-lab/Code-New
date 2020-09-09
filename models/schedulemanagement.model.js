const mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
    relative: {
        type: String
    },
    yourself: {
        type: String

    },
    fullName:{
        type: String,
        required: 'This field is required.'
    },
    DateOfBirth: {
        type: String,
        required: 'This field is required.'
    },
    Gender: {
        type: String,
    },
    Phone: {
        type: String,
        required: 'This field is required.'
    },
    Email: {
        type: String
    },
    Address: {
        type: String,
        required: 'This field is required.'
    },
    District: {
        type: String
    },
    Province: {
        type: String
    },
    DayExamination: {
        type: String
    },
    TimeExamination: {
        type: String
    },
    Describe: {
        type: String
    }
});

module.exports = mongoose.model('schedulemanagement', scheduleSchema);
