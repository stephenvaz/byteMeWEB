import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './EventVal.css';
import '../openTile.css';
function EventVal() {

    const id = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        
        const fetchData = async () => {
            const response = await axios.post("http://localhost:4000/api/event_details", { event_name: id['val'] });
            setData(response.data);
            console.log(data);
        };
        fetchData();
        
    }, []);
    const handleAllow = async (e) => {
        e.preventDefault();
        const resp = await axios.post("http://localhost:4000/api/set_permission", { eventName: id['val'], status: true });
        if(resp.data == "Successful")
        {window.location.href = "/";}
    }
    const handleDeny = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:4000/api/set_permission", { eventName: id['val'], status: false });
        if(resp.data == "Successful")
        {
        window.location.href = "/";
        }
    }
    if(data) {
    return (
        
        <div className='back'>
            {/* <NavB /> */}
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
                <div className="info-text">{data[0]['details']}</div>

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
                <h4>Date: 05-02-2023</h4>
                <h4>Time: 16:30</h4>
                <h4>Prize: 50000 INR</h4>
            </div>
            <div className="com-logo"></div>
            <div className="register1">
                <button type="button" onClick={handleAllow }><label><h2>Allow</h2></label></button>
            </div>
            <div className="register2">
                <button type="button" onClick={handleDeny}><label><h2>Deny</h2></label></button>

            </div>
        </div>

    );
            }
            else {
                return (
                    <div>
                        <h1>loading</h1>
                    </div>
                )
            }

}

export default EventVal;