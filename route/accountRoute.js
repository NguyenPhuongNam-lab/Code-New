var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController');
const auth = require('../middlewares/auth');