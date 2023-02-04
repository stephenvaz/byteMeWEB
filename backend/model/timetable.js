const { Mongoose, default: mongoose } = require("mongoose");

const ttSchema = mongoose.Schema({
    time_from: {
        type: String,
        required: true,
    },
    time_to: {
        type: String,
        required: true,
    },
    Div: {
        type: String,
        default: null,
    },
    room_no: {
        type: String,
        required: true,
    }

})

module.exports = mongoose.model("TimeTable", ttSchema);