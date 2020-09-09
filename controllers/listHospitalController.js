const express = require('express');
const mongoose = require('mongoose');
const List = mongoose.model('detail')

exports.LoadHospital = function(req, res ){
    List.find({})
    .then(Lists => {
        res.render('./admin/listHospital', {Lists : Lists})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
}; 
