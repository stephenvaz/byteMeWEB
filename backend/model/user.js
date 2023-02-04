const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        min: 3,
        max: 20,
        unique: true
    },
    password: {
        type: String,
        min: 3,
        max: 20,
    },
    comm_name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true
    }
})

module.exports = mongoose.model("Users", userSchema);