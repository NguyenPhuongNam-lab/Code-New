const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.Loadpatient = function(req, res) {
    User.find({})
    .then(Users => {
        res.render('./admin/listPatient', {Users : Users})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
}; 
