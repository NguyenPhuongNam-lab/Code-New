const express = require('express');
const router = express.Router();
var create_consultant = require('../controllers/createconsultantController');

router.get('/', (req,res,next) =>{
    res.render('./admin/CreateConsultant', {title: 'Create Consultant', layout: false});
})

router.post('/', (req, res, next) =>{
    create_consultant.Newconsultant(req, res, next);
})


module.exports = router;