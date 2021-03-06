const mongoose = require("mongoose");

const book = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 15,
        unique: true,
        required: true
    },
    description: {
        type: String,
        minlength: 10,
        maxlength: 150
    },
    image: String,
    price: {
        type: Number,
        required: true,
        min: 1,
        max: 10000
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1,
        max: 10
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    pages: {
        type: Number,
        min: 10,
        max: 5000
    }
})

module.exports = mongoose.model("book", book);