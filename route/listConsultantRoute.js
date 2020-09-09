const express = require('express');
const router = express.Router();
const list_consultant = require('../controllers/listConsultantController');
// var Listc = require('../models/listConsultant.model');

router.get('/', (req, res) => {
    list_consultant.LoadList(req, res)
})

// router.get('/', (req, res) => {
//     Listc.find({})
//     .then(Listcs => {
//         res.render('./admin/listConsultant', { Listcs : Listcs})
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//         throw err;
//     })
//  }); 


 
 module.exports = router;