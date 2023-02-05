import React, { useEffect, useState } from "react";
import './openTile.css';
import NavB from "./navbar";
import axios from "axios";


function OpenTile() {
    const eventName = localStorage.getItem("details");

    const [detail, setDetail] = useState(null);

    useEffect(() => {
        return async () => {
            console.log(eventName)
            const resp = await axios.post("http://localhost:4000/api/event_details", { eventName });
            console.log(resp);
            setDetail(resp.data);
            console.log(detail[0])
        }
    }, [])

    if (!detail) {
        return (
            <div>
                return
            </div>
        )
    }
    const date = detail[0].time_from.split("T");
    return (

        <div className='back'>
            <NavB />
            <div>
                <div className="box">
                    <a href="#"></a>
                    <div className="hover-point"></div>
                    <div className="hover-point"></div>
                    <div className="hover-point"></div>
                    <div className="hover-point"></div>
                    <div className="hover-point"></div>
                    <div className="hover-point"></div>
                    <div className="hover-point"></div>
                    <div className="hover-point"></div>
                    <div className="box-contents"></div>
                </div>
            </div>
            <div className="info">
                <h1 className="heading">About Night Party</h1>
                <p>{detail[0].details}
                </p>
            </div>
            <div className="rules">
                <h1 className="heading"> Rules</h1>
                <ul style={{ listStyle: "unset", textAlign: "left" }}>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, ratione.</li>
                </ul>
            </div>
            <div className="amt">
                <h4>Date:{date[0]}</h4>
                <h4>Time:{date[1]}</h4>
                <h4>Prize: {detail[0].prize}</h4>
            </div>
            <div className="com-logo">
            </div>
            <div className="register">
                <button className="regbut" type="submit"  onClick={() => {
                    //   window.location.href = "https://forms.gle/tSUGYp3rg3XH77pA8"
                    window.open("https://forms.gle/tSUGYp3rg3XH77pA8", "_blank")
                }}><h2>Register</h2></button>
            </div>
        </div>
    )
}

export default OpenTile;