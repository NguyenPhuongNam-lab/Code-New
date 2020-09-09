const express = require('express');
const mongoose = require('mongoose');
const Scheduleadd = mongoose.model('schedulemanagement');

exports.Schedulenew = function(req, res) {
    if(req.body.fullName && req.body.DateOfBirth && req.body.Phone && req.body.Address){
        console.log(req.body);
        var newSchedule = new Scheduleadd();
        newSchedule.relative = req.body.relative;
        newSchedule.yourself = req.body.yourself;  
        newSchedule.fullName = req.body.fullName;
        newSchedule.DateOfBirth = req.body.DateOfBirth;
        newSchedule.Gender = req.body.Gender;
        newSchedule.Phone = req.body.Phone;
        newSchedule.Email = req.body.Email;
        newSchedule.Address = req.body.Address;
        newSchedule.District = req.body.District;
        newSchedule.Province = req.body.Province;
        newSchedule.DayExamination = req.body.DayExamination;
        newSchedule.TimeExamination = req.body.TimeExamination;
        newSchedule.Describe = req.body.Describe;
        console.log(newSchedule);
        newSchedule.save((err , doc) =>{
        if (!err)
            res.redirect('/home');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("./patient/schedule-management", {
                    viewTitle: 'Schedule-management',
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
        res.redirect('/schedule-management')
    }
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'Phone':
                body['PhoneError'] = err.errors[field].message;
                break;
            case 'Address':
                body['AddressError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}