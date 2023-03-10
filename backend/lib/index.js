//email packages
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
//email packages
const { EMAIL, PASSWORD } = require("../env.js");



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
//node mail test
app.get("/email_test", async (req, res) => {
    var link = "vsm"
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<a href='http://localhost:5173/event/" + link + "'>test</a>",
    }).then((info) => {
        console.log("sent")
        // return res.send("sent")
        return res.status(201).json({
            msg: "sent",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        })
    })

})
//node mail test
async function sendEmail(link, email) {

    let config = {
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    }
    let transporter = nodemailer.createTransport(config);
    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "ByteMe",
            link: "http://localhost:5173/"
        }

    });
    let emailBody = {
        body: {
            name: "",
            intro: "Permission Approval Request",
            action: {
                instructions: "Click the button below to approve the permission request",
                button: {
                    color: "#22BC66",
                    text: "Approve",
                    link: "http://localhost:5173/event/" + link
                }

            },
            outro: "We've verified that there's no other clashing event or class. You may go ahead and approve the request."
        }
    }
    let emailTemplate = MailGenerator.generate(emailBody);
    let message = {
        from: EMAIL,
        to: email,
        subject: "Permission Approval Request",
        html: emailTemplate

    }
    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err)
        }
        // else {
        //     console.log(info)
        // }
    }
    )

}
app.get("/api/permission_requests", async (req, res, next) => {
    const permission_requests = await Permission.find({}).select({ name: 1, email: 1, designation: 1, _id: 0, });
    res.send(permission_requests);
})

app.post("/add_event", async (req, res, next) => {
    const { eventDescription, eventName, fromTime, permission, prize, room, toTime, venue } = req.body;
    const checkroom = await TimeTable.find({ room_no: room });
    let eventFrom = moment(fromTime);
    let eventTo = moment(toTime);

    //for lectures
    for (let obj of checkroom) {
        let ttFrom = moment(obj.time_from);
        let ttTo = moment(obj.time_to);
        if ((eventFrom.diff(ttFrom) < 0 && eventTo.diff(ttFrom) < 0) || (eventFrom.diff(ttTo) > 0 && eventTo.diff(ttTo) > 0)) {
            continue;

        }
        else {
            console.log("Not Available");
            return res.send(`Lecture in ${room} from ${eventFrom} to ${eventTo}`);
        }
    }

    //for events
    const checkevent = await Events.find({ room_no: room });
    for (let obj of checkevent) {
        let ttFrom = moment(obj.time_from);
        let ttTo = moment(obj.time_to);
        if ((eventFrom.diff(ttFrom) < 0 && eventTo.diff(ttFrom) < 0) || (eventFrom.diff(ttTo) > 0 && eventTo.diff(ttTo) > 0)) {
            continue;
        }
        else {
            console.log(`Already an event exists in ${room} from ${eventFrom} to ${eventTo}`);
            return res.send("Not Available, another event exists");
        }
    }

    try {
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
    } catch (err) {
        console.log("Event already exists with this name");
        res.send("Event already exists with this name");
        return;
    }
    for (let i = 0; i < permission.length; i++) {
        sendEmail(eventName, permission[i]);
        console.log("sent" + permission[i] + eventName);
    }

    res.send(`Successful`);
})

app.post("/api/event_details", async (req, res) => {
    const  event_name  = req.body.event_name;
    // console.log(event_name);
    // console.log(req.body)
    const eventDetails = await Events.find({ event_name: event_name });
    res.send(eventDetails);
    // console.log(eventDetails);
})

app.get("/api/all_events", async (req, res) => {
    const eventDetails = await Events.find({ status: true });
    console.log('test')
    console.log(eventDetails)
    res.send(eventDetails);
})

app.listen(PORT, hostname, () => {
    console.log(`You can now connect on http://${hostname}:${PORT})`)
})

app.post("/api/set_permission", async (req, res) => {
    const { eventName, status } = req.body;
    console.log(req.body.eventName);
    const test = await Events.findOneAndUpdate({ event_name: req.body.eventName }, { status: req.body.status })
    // console.log(test);
    res.send("Successful");
})


app.get("/api/complete_timetable", async (req, res) => {
    try {
        const tt = await TimeTable.find({});
        return res.send(tt);
    } catch (err) {
        console.log(err);
        return res.send(err);
    }
    // return res.send(tt);
})
// const test = async () => {
//     const tt = await TimeTable.find({});
//     console.log(tt);
// }

// test();

// sendEmail("event2", "pimoji4508@ezgiant.com")