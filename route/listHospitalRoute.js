const express = require('express');
const router = express.Router();
const list_hospital = require('../controllers/listHospitalController');
// var List = require('../models/watchlist.model');

router.get('/', (req, res) => {
    list_hospital.LoadHospital(req, res)
})
//     List.find({})
//     .then(Lists => {
//         res.render('./admin/listHospital', { Lists : Lists})
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//         throw err;
//     })
//  }); 
 

 module.exports = router;