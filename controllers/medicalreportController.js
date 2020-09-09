const express = require('express');
const mongoose = require('mongoose');
const Medical = mongoose.model('medicalreport');

exports.addmedical = function(req, res) {
    if(req.body.firstName && req.body.lastName && req.body.orFullname && req.body.gender){
            console.log(req.body);
            var medical = new Medical();
            medical.firstName = req.body.firstName;
            medical.lastName = req.body.lastName;
            medical.orFullname = req.body.orFullname;
            medical.dateOfbirth = req.body.dateOfbirth;
            medical.gender = req.body.gender;
            medical.nationality = req.body.nationality;
            medical.countryOfResidence= req.body.countryOfResidence;
            medical.Passport = req.body.Passport;
            medical.issuedBy = req.body.issuedBy;
            medical.expiredDate = req.body.expiredDate;
            medical.pictureOfPassport = req.body.pictureOfPassport;
            medical.languagesupport = req.body.languagesupport;
            medical.medicalHistory = req.body.medicalHistory;
            medical.diagnosis = req.body.diagnosis;
            medical.treatment =  req.body.treatment;
            medical.medicalrecorfile = req.body.medicalrecorfile;
            console.log(medical);
            medical.save((err, doc)=>{
            if (!err)
            res.redirect('/schedule-management');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("./patient/medical-report", {
                    viewTitle: 'Medical-report',
                    user: req.body,
                    layout: false,
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}
else{
    res.redirect('/medical-report')
}
};

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'firstName':
                body['firstNameError'] = err.errors[field].message;
                break;
            case 'lastName':
                body['lastNameError'] = err.errors[field].message;
                break;
            case 'orFullname':
                body['orFullnameError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}