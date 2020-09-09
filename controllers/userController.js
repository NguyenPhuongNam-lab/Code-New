const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
// const Patient = mongoose.model('Patient');
// const Consultant = mongoose.model('Consultants');
// const Representative = mongoose.model('Representative');

module.exports.accountLogin = function(req, res, next) {
    var params = req.body;
    console.log(req.body)
    var type_user = req.body.type_user;
    // if (type_user == 2) {
    //     User.findOne({ email: req.body.email, password: req.body.password }).then(function(user) {
    //         console.log(user);
    //         if (user) {
    //             req.session.userId = user._id;
    //             req.session.userType = user.type;
    //             req.session.userName = user.name;

    //             Consultant.findOne({ account: user._id }).then(function(consultant) {
    //                 console.log(consultant);
    //                 if (consultant) {
    //                     req.session.consultantId = consultant._id;
    //                 }
    //                 return res.redirect('/consultant');
    //             });
    //         } else {
    //             return res.redirect('/consultant');
    //         }
    //     });
    // } else if (type_user == 3) {
    //     User.findOne({ email: req.body.email, password: req.body.password }).then(function(user) {
    //         console.log(user);
    //         if (user) {
    //             req.session.userId = user._id;
    //             req.session.userType = user.type;
    //             req.session.userName = user.name;

    //             Representative.findOne({ account: user._id }).then(function(representative) {
    //                 console.log(representative);
    //                 if (representative) {
    //                     req.session.representativeId = representative._id;
    //                 }
    //                 return res.redirect('/representative');
    //             });
    //         } else {
    //             return res.redirect('/representative');
    //         }
    //     });
    // } else 
    if (type_user == 1) {
        User.findOne({ email: req.body.email, password: req.body.password })
            .exec(async function(err, user) {
                if (user) {
                    req.session.userId = user._id;
                    req.session.userType = user.type;
                    req.session.userFirstname = user.firstname;
                    req.session.userLaststname = user.lasttname;
                    return res.redirect('/home');
                }
                res.redirect('/login');
            });
    } else {
        Patient.findOne().exec(function(err, patient) {

        });
    }
}

exports.accountRegister = function(req, res) {
    if (req.body.email && req.body.fullname && req.body.password && req.body.repassword) {
        console.log(req.body);
        var user = new User();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.orFullname = req.body.orFullname;
        user.dateOfBirth = req.body.dateOfBirth;
        user.gender = req.body.gender;
        user.nationality = req.body.nationality;
        user.countryofresidence = req.body.countryofresidence;
        user.passport = req.body.passport;
        user.issuedBy = req.body.issuedBy;
        user.expiredDate = req.body.expiredDate;
        user.picture = req.body.picture;
        user.email = req.body.email;
        user.mobile = req.body.mobile;
        user.username = req.body.username;
        user.password = req.body.password;
        user.type = 4;
        console.log(user);
        user.save((err, doc) => {
            if (!err)
                res.redirect('/login');
            else {
                if (err.name == 'ValidationError') {
                    handleValidationError(err, req.body);
                    res.render("register", {
                        viewTitle: 'Register',
                        user: req.body,
                        layout: false,
                    });
                } else
                    console.log('Error during record insertion : ' + err);
            }
        });
    }
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'firstName':
                body['firstNameError'] = err.errors[field].message;
                break;
            case 'lastName':
                body['lastNameError'] = err.errors[field].message;
                break;
            case 'email':
                body['emailError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}