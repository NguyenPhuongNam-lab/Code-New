var mongoose = require('mongoose');

var medicalSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    lastName: {
        type: String,
        required: 'This field is required.'
    },
    orFullname: {
        type: String,
        required: 'This field is required.'
    },
    dateOfbirth: {
        type: Date,
    },
    gender: {
        type: String,
        required: 'This field is required.'
    },
    nationality: {
        type: String,
    },
    countryOfResidence: {
        type: String,
    },
    Passport: {
        type: String,
    },
    issuedBy: {
        type: String,
    },
    expiredDate: {
        type: Date,
    },
    pictureOfPassport: {
        type: String,
    },
    languagesupport:{
        type: String,
    },
    medicalHistory:{
        type: String,
    },
    diagnosis:{
        type: String,
    },
    treatment:{
        type: String,
    },
    medicalrecorfile:{
        type: String,
    },
});

module.exports = mongoose.model('medicalreport', medicalSchema, 'medicalreport');