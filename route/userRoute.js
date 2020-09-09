const express = require('express');
const router = express.Router();
var user_controller = require('../controllers/userController');
var Detail = require('../models/watchlist.model');

router.get('/', (request, response) => {
    response.render('./patient/index');
});

router.get('/home', (req, res) => {
    res.render('./patient/home');
});

router.get('/register', (req, res) => {
    res.render('register', { title: 'Register', layout: false });
});
router.get('/login', (req, res) => {
    res.render('login', { title: 'Login', layout: false });
});
router.get('/forgot-password', (req, res) => {
    res.render('forgot-password', { title: 'Forgot password', layout: false });
});

router.post('/login', function(req, res, next) {
    account_controller.accountLogin(req, res, next);
});
//
router.post('/register', function(req, res) {
    account_controller.accountRegister(req, res);
});

router.get('/logout', function(req, res, next) {
    req.session.destroy();
    res.redirect('/login');
});


module.exports = router;