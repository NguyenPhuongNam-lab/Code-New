const express = require('express');
const router = express.Router();
const list_representation = require('../controllers/listRepresentationController');

router.get('/', (req, res) =>{
    list_representation.LoadRepresentation(req, res)
})

module.exports = router;