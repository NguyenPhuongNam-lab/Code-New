const express = require('express');
const mongoose = require('mongoose');
const createPresentation = mongoose.model('representation');

exports.createNew = function(req, res){
    if(req.body.fullName && req.body.Age && req.body.hospital){
        console.log(req.body);
        var newrepresentation = new createPresentation();
        newrepresentation.fullName = req.body.fullName;
        newrepresentation.Age = req.body.Age;
        newrepresentation.dateOfBirth = req.body.dateOfBirth;
        newrepresentation.address = req.body.address;
        newrepresentation.Gender = req.body.Gender;
        newrepresentation.email = req.body.email;
        newrepresentation.phone = req.body.phone;
        newrepresentation.hospital = req.body.hospital;
        newrepresentation.position = req.body.position;
        console.log(newrepresentation);
        newrepresentation.save((err, doc) =>{
            if (!err)
            res.redirect('/admin');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("./admin/create-Representation", {
                    viewTitle: 'Create Representation',
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
        res.redirect('/create-representation')
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
            case 'hospital':
                body['hospitalError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}