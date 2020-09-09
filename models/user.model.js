const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    },
    dateOfbirth: {
        type: Date,
    },
    gender: {
        type: String,

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
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
    },
    username: {
        type: String,
    },
    password: {
        type: String,
        required: 'This field is required.'
    },
    password2: {
        type: String,
        required: 'This field is required.'
    },
    date: {
        type: Date,
        default: Date.now
    },
})

// Custom validation for email
userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.path('password').validate((val) => {
    return /[a-zA-Z0-9]{6,12}/.test(val);
}, 'Invalid password');

//authenticate input against database
userSchema.statics.authenticate = function(email, password, callback) {

}

// export model 
module.exports = mongoose.model('User', userSchema);