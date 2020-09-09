const express = require('express');
const router = express.Router();
const consultant_infor = require('../controllers/consultantInformationController');
// var Listc = require('../models/listConsultant.model');

router.get('/:id', (req, res) =>{
    consultant_infor.LoadInfor(req, res)
})

router.post('/:id', (req,res) => {
    consultant_infor.InsertInfor(req, res)
})
// router.get('/:id', (req, res) => {
//     Listc.findById(req.params.id, (err, listc) => {
//         if (err) {
//             console.log(err);
//             throw err
//         }
//         res.render('./admin/ConsultantInformation', { listc: listc });
//     })
// });

// router.post('/:id', (req, res) => {
//     let id = req.params.id;
//     Listc.findByIdAndUpdate(
//         { _id: id },
//         { $set: {   fullNamee: req.body.fullName,
//                     Age: req.body.Age,
//                     dateOfbirth: req.body.dateOfbirth,
//                     Gender: req.body.Gender,
//                     Professional: req.body.Professional,
//                     Address: req.body.Address,
//                     phoneNumber: req.body.phoneNumber,
//                     Email: req.body.Email
//                  } },
//         { useFindAndModify: false })
//         .then(doc => {
//             res.redirect('/list-consultant')
//         })
// });



module.exports = router;