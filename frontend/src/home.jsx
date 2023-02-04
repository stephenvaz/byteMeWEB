import React from 'react';
import './App.css'
import NavB from './navbar';
import BootstrapCarousel from './darkcar';
import Tile from '../src/tile';
import ImageOne from './parallax/imgOne';
import ImageTwo from './parallax/imgTwo';


function Home() {
  return (
<<<<<<< HEAD
    <div className='back'>
        <NavB />
      <div className='bigbox'>
        <BootstrapCarousel />
        <div id='section2'>
          <Tile />
        </div>
        
      </div>
=======
    // <div className='back'>
    //     <NavB />
    //   <div className='bigbox'>
    //     <BootstrapCarousel />
    //     <Tile />
    //   </div>
    // </div>
    <div>
    <ImageOne />
    <ImageTwo />
>>>>>>> e81b79012a1aff70bc258bd3a91d7c7cf4146a58
    </div>
  )
}


export default Home;