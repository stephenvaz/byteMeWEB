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

function TileTest() {
    return (
        <Col className="colst" xs={6} style={{ minWidth: "500px", width: "auto",marginBottom: "-40px" }}>
            <a href="/openTile" className="tile-body">
                <div className="info-text">
                    <h1 className="event">Night Party</h1>
                    <ul>
                        <li><GroupIcon className="com-icon" style={{ fontSize: "1.2rem" }} />
                            <h6 className="com">CSI SPIT</h6></li>
                        <li> <LocationOnIcon className="loc-icon" style={{ fontSize: "1.2rem" }} />
                            <h6 className="location">Room No. 008</h6></li>
                        <li> <EventIcon className="date-icon" style={{ fontSize: "1.2rem" }} />
                            <h6 className="date">4th Feb</h6></li>
                        <li> <AccessTimeIcon className="time-icon" style={{ fontSize: "1.2rem" }} />
                            <h6 className="time">12 am</h6></li>
                    </ul>
                </div>
                <div className="poster">
                </div>
            </a>
        </Col>
    )
}

export default TileTest