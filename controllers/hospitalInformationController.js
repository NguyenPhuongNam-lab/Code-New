const express = require('express');
const mongoose = require('mongoose');
const List = mongoose.model('detail')

exports.LoadList = function(req, res) {
    List.findById(req.params.iD, (err, list) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('./admin/hospitalInformation', { list: list });
    })
}

exports.InserList = function(req, res) {
    let iD = req.params.iD;
    List.findByIdAndUpdate(
        { _id: iD },
        { $set: {   hospitalName: req.body.hospitalName,
                    phoneNumber: req.body.phoneNumber,
                    address: req.body.address,
                    subsidiaries: req.body.subsidiaries,
                    description: req.body.description
                 } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/list-hospital')
        })
}
