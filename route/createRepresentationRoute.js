const express = require('express');
const router = express.Router();
const create_representation = require('../controllers/createRepresentationController');

router.get('/', (req, res, next) =>{
    res.render('./admin/create-Representation', {title: 'Create Representation', layout: false});
})

router.post('/', (req, res, next)=>{
    create_representation.createNew(req, res, next);
})

module.exports = router;