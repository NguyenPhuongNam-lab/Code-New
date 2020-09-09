const express = require('express');
const mongoose = require('mongoose');
const Representation = mongoose.model('representation');

exports.LoadData = function(req, res){
    Representation.findById(req.params.Id, (err, listr) => {
        if (err) {
            console.log(err);
            throw err
        }
        res.render('./admin/RepresentationInformation', { listr : listr });
    })
};

exports.InserData = function(req, res){
    let Id = req.params.Id;
    Representation.findByIdAndUpdate(
        { _id: Id },
        { $set: {   fullName: req.body.fullName,
                    Age: req.body.Age,
                    dateOfBirth: req.body.dateOfBirth,
                    address: req.body.address,
                    Gender: req.body.Gender,
                    email: req.body.email,
                    phone: req.body.phone,
                    hospital: req.body.hospital,
                    position: req.body.position
                 } },
        { useFindAndModify: false })
        .then(doc => {
            res.redirect('/list-representation')
        })
}