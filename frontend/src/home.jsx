import React from 'react';
import './App.css'
import NavB from './navbar';
import BootstrapCarousel from './darkcar';
import Tile from '../src/tile';
import ImageOne from './parallax/imgOne';
import ImageTwo from './parallax/imgTwo';
import {motion} from 'framer-motion';

function Home() {
  return (
    // <div className='back'>
    //     <NavB />
    //   <div className='bigbox'>
    //     <BootstrapCarousel />
    //     <Tile />
    //   </div>
    // </div>
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    // transition={{delay: 0, duration: 1}}
    exit={{ opacity: 0 }}
    >
    <ImageOne />
    <ImageTwo />
    </motion.div>
  )
}


export default Home;