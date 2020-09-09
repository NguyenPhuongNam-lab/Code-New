const express = require('express');
const mongoose = require('mongoose');
const Listc = mongoose.model('listc');

exports.LoadList = function(req, res) {
    Listc.find({})
    .then(Listcs => {
        res.render('./admin/listConsultant', { Listcs : Listcs})
    })
    .catch(err => {
        console.log('Error: ', err);
        throw err;
    })
 }; 