require('./models/db');
var createError = require('http-errors');
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const session = require('express-session');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var index = require('./route/index');
const userRoute = require('./route/userRoute');
const watchingListRoute = require('./route/watchingListRoute');
const medicalReportRoute = require('./route/medicalReport');
const scheduleManagementRoute = require('./route/scheduleManagementRoute');
const CreateHospitalRoute = require('./route/CreateHospitalRoute');
const listHospitalRoute = require('./route/listHospitalRoute');
const listConsultantRoute = require('./route/listConsultantRoute');
const createConsultantRoute = require('./route/createConsultantRoute');
const consultantInformationRoute = require('./route/consultantInformationRoute');
const hospitalInformationRoute = require('./route/hospitalInformationRoute');
const hospitalInformationPatientRoute = require('./route/hospitalInformationPatienRoute');
const listRepresentationRoute = require('./route/listRepresentationRoute');
const createRepresentationRoute = require('./route/createRepresentationRoute');
const representationInformationRoute = require('./route/representationInformationRoute');
const listPatientRoute = require('./route/listPatientRoute');
const InformationPatientRoute = require('./route/InformationPatientRoute');

const User = require('./models/user.model');
const { request } = require('http');
const { response } = require('express');

const app = new express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());
app.use(bodyParser.json());
app.set('views', path.join(__dirname, '/views/'));

//Đăng ký thư mục public. 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
});

app.set('view engine', 'ejs');


//routes
var authencation = function(req, res, next) {
    req.requestTime = Date.now();
    next()
}

app.use(authencation);

app.use('/', userRoute);
app.use('/watching-list',watchingListRoute);
app.use('/medical-report',medicalReportRoute);
app.use('/schedule-management', scheduleManagementRoute);
//admin
app.use('/create-hospital', CreateHospitalRoute);
app.use('/list-hospital',listHospitalRoute);
app.use('/create-consultant',createConsultantRoute)
app.use('/list-consultant', listConsultantRoute);
app.use('/consultant-information',consultantInformationRoute);
app.use('/hospital-information',hospitalInformationRoute);
app.use('/information-hospital',hospitalInformationPatientRoute);
app.use('/list-representation',listRepresentationRoute);
app.use('/create-representation', createRepresentationRoute);
app.use('/representation-information', representationInformationRoute);
app.use('/list-patient',listPatientRoute);
app.use('/information-patient',InformationPatientRoute);

app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/admin', (request, response) => {
    response.render('./admin/index');
});
app.get('/tables',(request , response) => {
    response.render('./admin/tables')
})
app.get('/charts',(request , response) => {
    response.render('./admin/charts')
})

app.listen(4000, () => {
    console.log('App listening on port 4000');
});

// app.use(function(req, res, next) {
//     next(createError(404));
// });

//error handler
// app.use(function(err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};

//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });

module.exports = app;