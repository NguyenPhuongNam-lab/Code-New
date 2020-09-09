const express = require('express');
const router = express.Router();
const information_patient = require('../controllers/InformationPatientController');

router.get('/:ID', (req, res) => {
    information_patient.LoadData(req, res)
})

router.post('/:ID', (req,res)=>{
    information_patient.Inserdata(req,res)
})

module.exports = router;