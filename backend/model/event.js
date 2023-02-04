const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    event_name: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        required: true
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
        type: Object,
    },
    room_no: {
        type: String,
        default: null,
    },
    prize: {
        type: String,
        defualt: null,
    },
    entry: {
        type: Object,
        defualt: null
    }
})

module.exports = mongoose.model("Events", eventSchema);