const express = require('express');
const router = express.Router();
const information_forpatient = require('../controllers/hospitalInforPatientController');
// var detail = require('../models/watchlist.model');

router.get('/:id', (req, res) => {
    information_forpatient.InserData(req, res)
})
//     detail.find({_id: req.params.id})
//     .then(detail => {
//         res.render('./patient/hospital-information', {detail :detail})
//     })
//     .catch(err => {
//         console.log('Error: ', err);
//         throw err;
//     })
//  }); 


module.exports = router;