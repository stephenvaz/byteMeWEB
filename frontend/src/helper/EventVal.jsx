import { useParams } from "react-router-dom";
import './EventVal.css';

const EventVal = () => {
    
        // const [eventVal, setEventVal] = useState(0);
    
        // const eventHandler = (e) => {
        //     setEventVal(e.target.value);
        // };
        const id = useParams();
        () => {
            
        console.log(id);
        }
        
        // React.useEffect(() => {
        //     console.log('test');
        //     console.log(uid);
        // },[uid]);
        //get the event details from the id using post request
        //post event details to the backend
        //will get the event details from the backend
        return (
    
            <div className="validate">
    
                {/* <input type="text" onChange={eventHandler} /> */}

                <h1>validation website id {id['val']}</h1>
                <button onClick={() => console.log(uid)}>test</button>
                {/* render the event details from sid's expand tile function and also display approve and dissaprove*/}
            </div>
    
        );
    
}

export default EventVal;