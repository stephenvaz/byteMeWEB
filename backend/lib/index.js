const cors = require("cors");
const express = require("express");
const mongoose = require('mongoose');
const moment = require('moment');

const app = express();

const User = require("../model/user");
const Events = require("../model/event");
const TimeTable = require("../model/timetable");
const Permission = require("../model/permission");

const PORT = 4000;
const hostname = "localhost";
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded(true));

mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://rohan:rohan123@cluster0.ichkfl1.mongodb.net/byteme?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database")
}).catch(err => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/login", async (req, res) => {
    console.log("login")
    console.log(req.body)
    const { email, password } = req.body;
    try {
        const findUser = await User.find({ email: email });
        if (!findUser[0]) {
            return res.send("0");
        }
        else if (findUser[0].password === password) {
            return res.send("1");
        }
        else {
            return res.send("0");
        }
    } catch (err) {
        console.log(err)
    }
})

app.get("/api/permission_requests", async (req, res, next) => {
    const permission_requests = await Permission.find({}).select({ name: 1, email: 1, designation: 1, _id: 0, });
    res.send(permission_requests);
})

app.post("/add_event", async (req, res, next) => {
    const { eventDescription, eventName, fromTime, permission, prize, room, toTime, venue } = req.body;
    // console.log(req.body)

    const checkroom = await TimeTable.find({ room_no: room });
    let status = true;
    let eventFrom = moment(fromTime);
    let eventTo = moment(toTime);
    for (let obj of checkroom) {
        let ttFrom = moment(obj.time_from);
        let ttTo = moment(obj.time_to);
        // console.log("eventfrom-ttFrom"+eventTo.diff(ttFrom));
        // console.log("eventto-ttTo"+eventTo.diff(ttTo)); 
        if ((eventFrom.diff(ttFrom) < 0 && eventTo.diff(ttFrom) < 0) || (eventFrom.diff(ttTo) > 0 && eventTo.diff(ttTo) > 0)) {
            continue;

        }
        else {
            status = false;
            console.log("Not Available");
            return res.send("Not Available");
        }
    }

    const checkevent = await Events.find({ room_no: room });
    for (let obj of checkevent) {
        let ttFrom = moment(obj.time_from);
        let ttTo = moment(obj.time_to);
        if ((eventFrom.diff(ttFrom) < 0 && eventTo.diff(ttFrom) < 0) || (eventFrom.diff(ttTo) > 0 && eventTo.diff(ttTo) > 0)) {
            continue;
        }
        else {
            status = false;
            console.log("Not Available another event");
            return res.send("Not Available another event");
        }
    }

    await Events.create({
        event_name: eventName,
        venue: venue,
        time_from: fromTime,
        time_to: toTime,
        details: eventDescription,
        permission: permission,
        room_no: room,
        prize: prize,
    });

    res.send("Available");
})

app.listen(PORT, hostname, () => {
    console.log(`You can now connect on http://${hostname}:${PORT})`)
})

// const test = async () => {
//     await Events.create({
//         event_name: "eventName",
//         venue: "venue",
//         time_from: "fromTime",
//         time_to: "toTime",
//         details: "eventDescription",
//         permission: ["permission", "p2"],
//         room_no: "room",
//         prize: "prize",
//     });
// }

// test();