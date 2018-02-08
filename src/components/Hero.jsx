import React from 'react';
import Search from './Search';
// import { Link } from 'react-router-dom';

function Hero(){
  let heroText = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '70%',
    maxWidth: '1080px',
    margin: '180px auto',
    fontFamily: 'Roboto, sans-serif',
    color: '#484848',
    fontSize: '30px'
  };
  return (
    <div style={heroText}>
      <h2 style={{color: '#FF5A5F', margin: '0'}}>Airbnb</h2>
      <h2 style={{margin: '10px 0 0 0', fontWeight: 'lighter'}}>Book unique homes and</h2>
      <h2 style={{margin: '0px 0 15px 0 ', fontWeight: 'lighter'}}>experiences all over the world.</h2>
      <Search/>
    </div>
  );
}

export default Hero;
