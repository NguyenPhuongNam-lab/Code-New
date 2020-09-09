const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.LoadData = function(req, res){
    User.findById(req.params.ID, (err, user) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('./admin/PatientInformation', { user : user });
    })
};

exports.Inserdata = function(req, res){
    let ID = req.params.ID;
    User.findByIdAndUpdate(
        { _id: ID },
        { $set: {   firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    orFullname: req.body.orFullname,
                    dateOfBirth: req.body.dateOfBirth,
                    gender: req.body.gender,
                    nationality: req.body.nationality,
                    countryofresidence: req.body.countryofresidence,
                    passport: req.body.passport,
                    issuedBy: req.body.issuedBy,
                    expiredDate: req.body.expiredDate,
                    email: req.body.email,
                    mobile: req.body.mobile,
                    username: req.body.username,
                    password: req.body.password,
                    password2: req.body.password2
                 } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/list-patient')
        })
}