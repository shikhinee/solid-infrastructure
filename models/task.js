const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    
    projectID: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        maxlength: 16
    },
    fullname: {
        type: String,
        maxlength: 50
    },
    content: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },
    isComplete: {
        type: Boolean,
        defualt: false,
    }
})

module.exports = mongoose.models.Task || mongoose.model('Task', taskSchema);