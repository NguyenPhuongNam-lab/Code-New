const express = require('express');
const mongoose = require('mongoose');
const detail = mongoose.model('detail');

exports.InserData = function(req, res) {
    detail.find({_id: req.params.id})
    .then(detail => {
        res.render('./patient/hospital-information', {detail :detail})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
};