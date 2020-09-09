const mongoose = require('mongoose');

var accountSchema = mongoose.Schema({
    resourceType: {
        type: String
    },
    identifier: {
        type: String,
    },
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
        required: true
    },
    dateOfbirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    countryOfResidence: {
        type: String,
        required: true
    },
    Passport: {
        type: String,
        required: true
    },
    issuedBy: {
        type: String,
        required: true
    },
    expiredDate: {
        type: Date,
        required: true
    },
    pictureOfPassport: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: 'This field is required.'
    },
    mobile: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
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
    controlIdentifier: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Account'
    }],
    update: {
        type: Date,
    }
})

// export model 
mongoose.model('Account', accountSchema);