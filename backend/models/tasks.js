const mongoose = require('mongoose');

const tasksSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});


module.exports.Task = mongoose.model('Tasks', tasksSchema);