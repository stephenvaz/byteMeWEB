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

    // return (

        
    //     <div className='back'>
    //         {/* <NavB /> */}
    //         <div>
    //             <div className="box">
    //                 <a href="#"></a>
    //                 <div className="hover-point"></div>
    //                 <div className="hover-point"></div>
    //                 <div className="hover-point"></div>
    //                 <div className="hover-point"></div>
    //                 <div className="hover-point"></div>
    //                 <div className="hover-point"></div>
    //                 <div className="hover-point"></div>
    //                 <div className="hover-point"></div>
    //                 <div className="box-contents"></div>
    //             </div>
    //         </div>
    //         <div className="info">
    //             <div className="info-text">{data[0]['details']}</div>

    //         </div>
    //         <div className="rules"></div>
    //         <div className="amt"></div>
    //         <div className="com-logo"></div>
    //         <div className="register1">
    //             <button type="submit" onClick={() => {
    //                 console.log(data);
    //             } }><label><h2>Allow</h2></label></button>

    //         </div>
    //         <div className="register2">
    //             <button type="submit"><label><h2>Deny</h2></label></button>

    //         </div>
    //     </div>

    // );
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
            <div className="rules"></div>
            <div className="amt"></div>
            <div className="com-logo"></div>
            <div className="register1">
                <button type="submit" onClick={() => {
                    console.log(data);
                } }><label><h2>Allow</h2></label></button>
            </div>
            <div className="register2">
                <button type="submit"><label><h2>Deny</h2></label></button>

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