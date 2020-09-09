const express = require('express');
const router = express.Router();
var medicalreport_controller = require('../controllers/medicalreportController');


router.get('/', (req, res, next) => {
    res.render('./patient/medical-report', { title: 'Medical-report', layout: false });
});
router.post('/', (req, res, next) =>{
    medicalreport_controller.addmedical(req, res, next);
})

module.exports = router;