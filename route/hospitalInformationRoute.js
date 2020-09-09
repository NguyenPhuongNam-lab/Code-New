const express = require('express');
const router = express.Router();
const hospital_information = require('../controllers/hospitalInformationController');
// var List = require('../models/watchlist.model');

router.get('/:iD', (req, res) => {
    hospital_information.LoadList(req, res)
})
//     List.findById(req.params.iD, (err, list) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//         res.render('./admin/hospitalInformation', { list: list });
//     })
// });

router.post('/:iD', (req, res) => {
    hospital_information.InserList(req, res)
})
//     let iD = req.params.iD;
//     List.findByIdAndUpdate(
//         { _id: iD },
//         { $set: {   hospitalName: req.body.hospitalName,
//                     phoneNumber: req.body.phoneNumber,
//                     address: req.body.address,
//                     subsidiaries: req.body.subsidiaries,
//                     description: req.body.description
//                  } },
//         { useFindAndModify: false })
//         .then(doc => {
//             res.redirect('/list-hospital')
//         })
// });

module.exports = router;