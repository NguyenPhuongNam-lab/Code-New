const express = require('express');
const router = express.Router();
const representation_information = require('../controllers/RepresentationInformationController');

router.get('/:Id', (req, res) =>{
    representation_information.LoadData(req, res)
})

router.post('/:Id', (req, res) => {
    representation_information.InserData(req, res)
})

module.exports = router;