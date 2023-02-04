const mongoose = require("mongoose");
const permSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model("Permission", permSchema);