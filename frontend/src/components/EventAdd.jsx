import React, { useEffect } from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion'
import axios from 'axios';
import TextField from '@mui/material/TextField';

//date time
import moment from 'moment';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

//date time

//multiple selector
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//multiple selector
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './EventAdd.css'
import { Container } from '@mui/system';



// function EventBox(props) {
//   return (
//     <div className='eventBox'>
//       <div className='eventBox__header'>
//         <h1>{props.eventName}</h1>
//       </div>
//       <div className='eventBox__body'>
//         <p>{props.eventDescription}</p>
//       </div>
//     </div>
//   )
// }

const EventAdd = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    eventDescription: "",
    venue: "",
    room: "",
    prize: "",
  });
  
  const [permsreq, setPermsreq] = useState(
    []
  );

  const [fromTime, setFromTime] = useState(dayjs());
  const [fromSet, setFromSet] = useState("");
  const [toTime, setToTime] = useState(dayjs());
  const [toSet, setToSet] = useState("");
  function handleFromTimeChange(event) {
    

    setFromTime(event);
    // newValue = moment(newValue).format("YYYY-MM-DDTHH:mm:ssZ");
    // console.log(event);
    // setFromSet(newValue);
    var date = event.$d.toISOString().split("T")[0];
    // console.log(date);
    
    var hour = event.$H;
    if(hour<10){
      hour = "0"+hour;
    }
    var min = event.$m;
    if(min<10){
      min = "0"+min;
    }
    setFromSet(date+"T"+hour+":"+min);

  }
  function handleToTimeChange(event) {
    
    setToTime(event);
    var date = event.$d.toISOString().split("T")[0];
    var hour = event.$H;
    if(hour<10){

      hour = "0"+hour;
      console.log(hour)
    }
    var min = event.$m;
    if(min<10){
      min = "0"+min;
      console.log(min)
    }
    setToSet(date+"T"+hour+":"+min);
    // console.log(newValue.toString());
  }
  function handleEventChange(event) {
    const { name, value } = event.target;
    setEventDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  
  const getPermissionDets = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/permission_requests");
      setPermsreq(response.data);
      console.log(permsreq);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => { getPermissionDets() }
    , [

    ]);
  function testFun() {
    // console.log('data');
    // console.log(permsreq)
    // for (var i = 0; i < selected.length; i++) {
    //   console.log(permsreq[selected[i] - 1].email)
    // }
    // console.log(eventDetails);
    // console.log(fromSet);
    // console.log(toSet);
    // console.log(fromTime);
    console.log(fromSet);
    console.log(toSet);
  }
  const handleSubmit = async(e) => {
    // e.preventDefault();
    // try {
      var emails = [];
      for (var i = 0; i < selected.length; i++) {
        emails.push(permsreq[selected[i] - 1].email);
      }
      const payload = {
        eventName: eventDetails.eventName,
        eventDescription: eventDetails.eventDescription,
        venue: eventDetails.venue,
        room: eventDetails.room,
        prize: eventDetails.prize,
        fromTime: fromSet,
        toTime: toSet,
        permission: emails
      }
      // const body = { eventDetails, fromSet, toSet, selected };
      // console.log(body);
      e.preventDefault();
    try {
      console.log(payload);
      const response = await axios.post("http://localhost:4000/add_event", payload);
      console.log(
        "Event Added"
      );
      console.log(response.data);
      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }
  const [selected, setSelected] = useState([]);
  const handlePermissionChange = (event) => {
    console.log(event.target.value);

    setSelected(event.target.value);
    // for (var i = 0; i < selected.length; i++) {
    //   console.log(permsreq[selected[i] - 1].email)
    // }
  }

  var index = 0;
  return (
    // create a form to ask for details of the event
    // <Container>
          <motion.div
      className='eventAdd'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      // transition={{delay: 0, duration: 1}}
      exit={{ opacity: 0 }}
    ><div className='top'>
    <h1>Enter the Details</h1>   
    </div>
    
      <form>
        <div className='L1'>
          <label>Event Name</label>
          <input type="text" placeholder=" " name='eventName' onChange={handleEventChange}></input>
        </div>
        <div>
          <label>Event Description</label>
          <textarea className='desc' type="text" placeholder=" " name='eventDescription'  onChange={handleEventChange}></textarea>
        </div>
        <div >
          <label>Event Venue</label>
          <input type="text" placeholder=" " name='venue' onChange={handleEventChange}></input>
        </div>
        <div >
          <label>Event Room</label>
          <input type="text" placeholder=" " name='room' onChange={handleEventChange}></input>
        </div>
        <div >
          <label>Prize</label>
          <input type="text" placeholder=" " name='prize' onChange={handleEventChange}></input>
        </div>
        {/* <div class="flex-container"> */}
          <div className='inline1'>
                  <label>From</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker
                      label="DateTime"
                      inputFormat="DD-MM-YYYY HH:mm"
                      value={fromTime}
                      onChange={handleFromTimeChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                </div>
            
            <div className='inline2'>
              <label>To</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="DateTime"
                  inputFormat="DD-MM-YYYY HH:mm"
                  value={toTime}
                  onChange={handleToTimeChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div>
         {/* </div> */}
            
        <div >
          <label>Name</label>
          <Select multiple value={selected} onChange={(e) => {
            handlePermissionChange(e)
          }}>
            {
              permsreq.map((data) => {
                ++index;
                return (
                  <MenuItem key={data.name} value={index}>
                    {data.name} | {data.designation}
                  </MenuItem>
                );
              })}
          </Select>
        </div>
        <div className='L2'>
          <button type="button" className='btt' onClick={handleSubmit}>Add Event</button>
        </div>

      </form>

    </motion.div>

    

  )
}

export default EventAdd