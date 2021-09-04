const mongoose = require('mongoose');

const userReqSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        maxlength: 16
    },
    fullname: {
        type: String,
        required: true,
        maxlength: 50
    },
    phoneNumber: {
        type: String,
        required: true,
        maxlength: 8
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.models.UserRequest || mongoose.model('UserRequest', userReqSchema);