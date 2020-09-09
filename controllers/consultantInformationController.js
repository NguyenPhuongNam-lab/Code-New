const express = require('express');
const mongoose = require('mongoose');
const Listc = mongoose.model('listc')

exports.LoadInfor = function(req, res) {
    Listc.findById(req.params.id, (err, listc) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('./admin/ConsultantInformation', { listc: listc });
    })
};

exports.InsertInfor = function(req, res) {
    let id = req.params.id;
    Listc.findByIdAndUpdate(
        { _id: id },
        { $set: {   fullName: req.body.fullName,
                    Age: req.body.Age,
                    dateOfbirth: req.body.dateOfbirth,
                    Gender: req.body.Gender,
                    Professional: req.body.Professional,
                    Address: req.body.Address,
                    phoneNumber: req.body.phoneNumber,
                    Email: req.body.Email
                 } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/list-consultant')
        })
};

