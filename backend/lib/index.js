const cors = require("cors");
const express = require("express");
const mongoose = require('mongoose')
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
        const findUser = await User.find({ email });
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
    const permission_requests = await Permission.find({}).select({ name: 1, email: 1, _id: 0, });
    res.send(permission_requests);
})

app.listen(PORT, hostname, () => {
    console.log(`You can now connect on http://${hostname}:${PORT})`)
})
