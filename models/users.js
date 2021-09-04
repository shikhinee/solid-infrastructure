const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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
    },
    role: {
        name: {
            type: String,
            required: true
        },
        isFounder: {
            type: Boolean,
            required: true,
        }
    },
    bankName: {
        type: String,
        maxlength: 25
    },
    bankNumber: {
        type: String,
        maxlength: 10
    },
    timeLog: [{
        Date: { type: String },
        ArrivalTime: { type: String }
    }]
})

module.exports = mongoose.models.User || mongoose.model('User', userSchema);