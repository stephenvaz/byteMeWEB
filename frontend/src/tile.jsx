import React from "react";
import Img from './images/tile.png';
import './tile.css';
import { Icon } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GroupIcon from '@mui/icons-material/Group';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Tile() {
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
        <Container>
            <Row className="row1">
                <Col className="col1">
                    <a href="#" className="tile-body">
                        <div className="info-text">
                            <h1 className="event">Night Party</h1>
                            <ul>
                                <li><GroupIcon className="com-icon" style={{ fontSize: "1.2rem" }} />
                                    <h6 className="com">Committee </h6></li>
                                <li> <LocationOnIcon className="loc-icon" style={{ fontSize: "1.2rem" }} />
                                    <h6 className="location">Auditorium</h6></li>
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
                <Col>
                    <a href="#" className="tile-body">
                        <div className="info-text">
                            <h1 className="event">Night Party</h1>
                            <ul>
                                <li><GroupIcon className="com-icon" style={{ fontSize: "1.2rem" }} />
                                    <h6 className="com">Committee </h6></li>
                                <li> <LocationOnIcon className="loc-icon" style={{ fontSize: "1.2rem" }} />
                                    <h6 className="location">Auditorium</h6></li>
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
            </Row>
        </Container>
    )
}

export default Tile;