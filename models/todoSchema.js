const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        reqiured: true,
        validate: {
            validator: (title)=>title.trim().length>5,
            message:"Title must be longer than 5 characters"
        }
    },
    isCompleted: {
        type: Boolean,
        default:false,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Todo', todoSchema);