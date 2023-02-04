import React from 'react';
import './App.css'
import NavB from './navbar';
import BootstrapCarousel from './darkcar';
import Tile from '../src/tile';
import ImageOne from './parallax/imgOne';
import ImageTwo from './parallax/imgTwo';


function Home() {
  return (
    <div className='back'>
        <NavB />
      <div className='bigbox'>
        <BootstrapCarousel />
        <Tile />
      </div>
    </div>
  )
}


export default Home;