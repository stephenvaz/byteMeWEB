import React from 'react';
import './App.css'
import NavB from './navbar';
import BootstrapCarousel from './darkcar';
import Tile from './tile';

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