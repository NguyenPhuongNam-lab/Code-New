const express = require('express');
const router = express.Router();
const list_patient = require('../controllers/listPatientController');

router.get('/', (req, res) => {
    list_patient.Loadpatient(req, res)
})

module.exports = router;