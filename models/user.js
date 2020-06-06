const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 20,
        unique: true
    },
    password: {
        type: String
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 35,
        unique: true
    },
    role: {
        type: Number,
        required: true
    },
    book: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "book"
        }]
    }
})

module.exports = mongoose.model("user", user);