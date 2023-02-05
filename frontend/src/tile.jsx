import React, { useEffect } from "react";
import Img from './images/tile.png';
import './tile.css';
import { Icon } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TileTest from "./tiletest";
import Grid from '@material-ui/core/Grid'
import { useState } from "react";
import axios from "axios";

function Tile() {
    const [details, setDetails] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get("http://localhost:4000/api/all_events");
            console.log(resp.data);
            setDetails(resp.data);
            console.log(details);
        }
        fetchData();
    }, [])
    if(!details) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        // <div className="container-fluid">
        //     <div className="row">
        //         <div className="col-lg-6">
        //             <a href="#" className="tile-body">
        //                 <div className="info-text">
        //                     <h2 className="event">Night Party</h2>
        //                     <ul>
        //                         <li><GroupIcon className="com-icon" style={{ fontSize: "1.2rem" }} />
        //                             <h6 className="com">Committee </h6></li>
        //                         <li> <LocationOnIcon className="loc-icon" style={{ fontSize: "1.2rem" }} />
        //                             <h6 className="location">Auditorium</h6></li>
        //                         <li> <EventIcon className="date-icon" style={{ fontSize: "1.2rem" }} />
        //                             <h6 className="date">4th Feb</h6></li>
        //                         <li> <AccessTimeIcon className="time-icon" style={{ fontSize: "1.2rem" }} />
        //                             <h6 className="time">12 am</h6></li>
        //                     </ul>
        //                 </div>
        //                 <div className="poster">
        //                 </div>
        //             </a>
        //         </div>
        //         <div className="col-lg-6">
        //             <a href="#" className="tile-body">
        //                 <div className="info-text">
        //                     <h2 className="event">Night Party</h2>
        //                     <ul>
        //                         <li><GroupIcon className="com-icon" style={{ fontSize: "1.2rem" }} />
        //                             <h6 className="com">Committee </h6></li>
        //                         <li> <LocationOnIcon className="loc-icon" style={{ fontSize: "1.2rem" }} />
        //                             <h6 className="location">Auditorium</h6></li>
        //                         <li> <EventIcon className="date-icon" style={{ fontSize: "1.2rem" }} />
        //                             <h6 className="date">4th Feb</h6></li>
        //                         <li> <AccessTimeIcon className="time-icon" style={{ fontSize: "1.2rem" }} />
        //                             <h6 className="time">12 am</h6></li>
        //                     </ul>
        //                 </div>
        //                 <div className="poster">
        //                 </div>
        //             </a>
        //         </div>
        //     </div>
        // </div>
        // <Container>
        //     <Row >
        //               <TileTest />
        //               <TileTest />
        //               <TileTest />
        //               <TileTest />
        //     </Row>
        // </Container>
        <div id="section2">
         <div>
        <span className='uevent'>Upcoming Events</span>
       </div>
       <div>
        <Grid container spacing={2}>
            {/* <Grid container item xs={6} direction="column" > */}
                {/* <TileTest  /> */}
                {details.map((data) => {
                    return (
                        <Grid container item xs={6} direction="column" >
                        <TileTest key={data._id} detail = {data}/>
                        </Grid>
                    )
                })}
            {/* </Grid> */}
            {/* <button onClick={() => {
                console.log(details)
            }}>test</button> */}
        </Grid>
        </div>
        </div>
    )
}

export default Tile;