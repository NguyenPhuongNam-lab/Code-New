const express = require('express');
const mongoose = require('mongoose');
const Detail = mongoose.model('detail');

exports.watchList = function(req, res) {
    Detail.find({})
    .then(Details => {
        res.render('./patient/watching-list', { Details : Details})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
};