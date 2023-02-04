const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    }
})

module.exports = mongoose.model("Users", userSchema);