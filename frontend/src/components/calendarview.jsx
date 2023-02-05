import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


import { useState, useEffect } from 'react';
import axios from 'axios';
import {motion} from 'framer-motion';

//css
import './cal.css'
const Calendarview = () => {

    //get entire time table into calendar
    //get all events into calendar
    const [events, setEvents] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:4000/api/all_events");
            console.log(response.data);
            var events = [];
            for(var i = 0; i < response.data.length; i++) {
                var event = {
                    title: response.data[i]['event_name'] + " | " + response.data[i]['room_no'],
                    date: response.data[i]['time_from'].split('T')[0],
                    start: response.data[i]['time_from'],
                    end: response.data[i]['time_to'],
                    backgroundColor: "",
                }
                events.push(event);
            }
            
            const response2 = await axios.get("http://localhost:4000/api/complete_timetable" );
            console.log("response2.data");
            console.log(response2.data);
            for(var i = 0; i < response2.data.length; i++) {
                var event = {
                    title: "Div: "+response2.data[i]['Div'] + " | " + response2.data[i]['room_no'],
                    date: response2.data[i]['time_from'].split('T')[0],
                    start: response2.data[i]['time_from'],
                    end: response2.data[i]['time_to'],
                    backgroundColor: "#90EE90",
                }
                events.push(event);
            }
            setEvents(events);
            // setEvents(response.data);
            // console.log(events);
        };
        fetchData();
        
    },[])
    if(!events) {
        return (
            <div>
                {/* <h1>No Events Yet</h1> */}
            </div>
        )
    }
    // const events = [
    //     { title: 'event 1', date: '2023-02-05' , start: '2023-02-05T12:00:00', end: '2023-02-05T14:00:00'},
    //     { title: 'event 2', date: '2021-02-05' }
    // ]
    //populate calendar with events using useeffect
  return (
    <motion.div className='calendar' 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    // transition={{delay: 0, duration: 1}}
    exit={{ opacity: 0 }}
    >
    <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, bootstrap5Plugin]}
        initialView="timeGridDay"
        events={events}
        height={"100vh"}
        themeSystem= 'bootstrap5'
        nowIndicator={true}

      />
      </motion.div>
  )
}

export default Calendarview