const express = require('express');
const mongoose = require('mongoose');
const createhospital = mongoose.model('detail')

exports.creatnew = function(req, res) {
    if(req.body.hospitalName && req.body.address && req.body.phoneNumber){
        console.log(req.body);
        var newhospital = new createhospital();
        newhospital.hospitalName = req.body.hospitalName;
        newhospital.address = req.body.address;
        newhospital.phoneNumber = req.body.phoneNumber;
        newhospital.subsidiaries = req.body.subsidiaries;
        newhospital.description = req.body.description;
        console.log(newhospital);
        newhospital.save((err, doc) =>{
            if (!err)
            res.redirect('/admin');
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
                res.render("./admin/admincreateHospital", {
                    viewTitle: 'Create Hospital',
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
        res.redirect('/create-hospital')
    }
}

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'hospitalName':
                body['hospitalNameError'] = err.errors[field].message;
                break;
            case 'address':
                body['addressError'] = err.errors[field].message;
                break;
            case 'phoneNumber':
                body['phoneNumberError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}