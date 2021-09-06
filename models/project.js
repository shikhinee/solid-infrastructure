const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    
    projectname: {
        type: String,
        required: true,
        lowercase: true,
        maxlength: 30
    },
    companyName: {
        type: String,
        required: true,
        maxlength: 50
    },
    lead: {
        type: String,
        required: true,
        maxlength: 16
    },
    dateStarted: {
        type: Date,
        default: Date.now
    },
    dateCompleted: {
        type: Date,
        defualt: null,
    },
    users: [],
    isOn: {
        type: Boolean,
        default: false
    },
    isComplete: {
        type: Boolean,
        defualt: false,
        required: true,
    },
    deadline: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.models.Project || mongoose.model('Project', projectSchema);