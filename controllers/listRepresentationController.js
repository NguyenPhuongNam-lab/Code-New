const express = require('express');
const mongoose = require('mongoose');
const Representation = mongoose.model('representation');

exports.LoadRepresentation = function(req, res){
    Representation.find({})
    .then(listR =>{
        res.render('./admin/listRepresentation',{listR: listR})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
}