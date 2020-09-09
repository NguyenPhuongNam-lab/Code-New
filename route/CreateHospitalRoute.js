const express = require('express');
const router = express.Router();
var create_hospital = require('../controllers/createhospitalController');

router.get('/', (req,res,next) =>{
    res.render('./admin/Create-Hospital', {title: 'Create Hospital', layout: false});
})

router.post('/', (req, res, next) =>{
    create_hospital.creatnew(req, res, next);
})


module.exports = router;