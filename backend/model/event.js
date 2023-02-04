const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    event_name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        required: true,
        unique: true,
    },
    venue: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        required: true
    },
    time_from: {
        type: String,
        required: true,
    },
    time_to: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        default: null,
    },
    permission: {
        type: Array,
    },
    room_no: {
        type: String,
        default: null,
    },
    prize: {
        type: String,
        defualt: null,
    },
    status: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model("Events", eventSchema);