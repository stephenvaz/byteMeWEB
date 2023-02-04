import React from 'react'
import {motion} from 'framer-motion'
import './EventAdd.css'

const EventAdd = () => {
  return (

    // create a form to ask for details of the event
    <motion.div 
      className='eventAdd'
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      // transition={{delay: 0, duration: 1}}
      exit={{opacity: 0}}
    >
      <form>
        <div className="eventBox">
        <label>Event Name</label>
          <input type="text" id="eventname" placeholder=" "></input>
          </div>

          </form>
    </motion.div>
  )
}

export default EventAdd