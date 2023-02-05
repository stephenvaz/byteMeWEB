import React from "react";
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

function TileTest(data) {
    data = data.detail;
    const date = data.time_from.split("T");
    const handleClick = async () => {
        try {
            console.log(data)
            localStorage.clear()
            localStorage.setItem("details", data.event_name)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Col className="colst" xs={6} style={{ minWidth: "500px", width:"auto", marginBottom:"-40px" }}>
            <a href={`/openTile/`} className="tile-body" onClick={handleClick}>
                <div className="info-text">
                    <h1 className="event">{data.event_name}</h1>
                    <ul>
                        <li><GroupIcon className="com-icon" style={{ fontSize: "1.2rem" }} />
                            <h6 className="com">CSI SPIT</h6></li>
                        <li> <LocationOnIcon className="loc-icon" style={{ fontSize: "1.2rem" }} />
                            <h6 className="location">{data.venue}</h6></li>
                        <li> <EventIcon className="date-icon" style={{ fontSize: "1.2rem" }} />
                            <h6 className="date">{date[0]}</h6></li>
                        <li> <AccessTimeIcon className="time-icon" style={{ fontSize: "1.2rem" }} />
                            <h6 className="time">{date[1]}</h6></li>
                    </ul>
                </div>
                <div className="poster">
                </div>
            </a>
        </Col>
    )
}

export default TileTest