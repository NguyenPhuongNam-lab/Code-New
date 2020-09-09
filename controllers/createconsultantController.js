const express = require('express');
const mongoose = require('mongoose');
const createconsultant = mongoose.model('listc')

exports.Newconsultant = function(req, res) {
    if(req.body.fullName && req.body.Age && req.body.Professional){
        console.log(req.body);
        var newconsulTant = new createconsultant();
        newconsulTant.fullName = req.body.fullName;
        newconsulTant.Age = req.body.Age;
        newconsulTant.dateOfbirth = req.body.dateOfbirth;
        newconsulTant.Gender = req.body.Gender;
        newconsulTant.Professional = req.body.Professional;
        newconsulTant.Address = req.body.Address;
        newconsulTant.phoneNumber = req.body.phoneNumber;
        newconsulTant.Email = req.body.Email;
        console.log(newconsulTant);
        newconsulTant.save((err, doc) =>{
            if (!err)
            res.redirect('/list-consultant');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("./admin/listConsultant", {
                    viewTitle: 'Create Consultant',
                    user: req.body,
                    layout: false,
                });
            }
            else
                console.log('Error during record insertion : ' + err);
        }
        })
    }
    else{
        res.redirect('/list-consultant')
    }
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'fullName':
                body['fullNameError'] = err.errors[field].message;
                break;
            case 'Age':
                body['AgeError'] = err.errors[field].message;
                break;
            case 'Position':
                body['PositionError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}