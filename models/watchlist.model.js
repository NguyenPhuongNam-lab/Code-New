var mongoose = require('mongoose');

var detailSchema = new mongoose.Schema({
    hospitalName:{
        type: String,
        required: 'This field is required.'
    },
    address:{
        type: String,
        require: 'This field is required.'
    },
    open:{
        type: String,
    },
    phoneNumber:{
        type: String,
        require: 'This field is required.'
    },
    subsidiaries:{
        type: String,
    },
    description:{
        type: String,
    }
});

module.exports = mongoose.model('detail', detailSchema, 'detail');