const express = require('express');
const router = express.Router();
var newschedule = require('../controllers/schedulemanagemenController');

router.get('/', (req, res) => {
    res.render('./patient/schedule-management',{ title: 'Schedule-management', layout: false });
});

router.post('/',(req,res,next)=>{
    newschedule.Schedulenew(req, res, next);
})

module.exports = router;