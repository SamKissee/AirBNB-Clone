

import React from 'react';
import Homes from './Homes';
import Experiences from './Experiences';
import Restaurants from './Restaurants';
import { Link } from 'react-router-dom';

function Explore(){
  let main = {
    margin: '0px auto',
    maxWidth: '1080px',
    fontFamily: 'Roboto, sans-serif'
  };
  let linkBlock = {
    margin: '0px 10px',
    border: '1px solid #cecaca',
    borderRadius: '3px',
    fontFamily: 'Roboto, sans-serif',
    boxShadow: '0px 0px 30px -11px rgba(0,0,0,0.75)',
    width: '225px',
    height: '72px'
  };
  let linkText = {
    margin: '0px 30px',
    fontFamily: 'Roboto, sans-serif'
  };
  let linkImg = {
    width: '96px',
    height: '72px',

  };
  return (
    <div style={main}>
      <h2>Explore Airbnb</h2>
      <div style={{display: 'flex' }}>
        <div style={linkBlock}>
          <Link style={{display: 'flex', alignItems: 'center'}} to="/homes">
            <div style={linkImg}><img style={linkImg} src="https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large"/></div>
            <div style={linkText}>Homes</div>
          </Link>
        </div>
        <div style={linkBlock}>
          <Link style={{display: 'flex', alignItems: 'center'}} to="/experiences">
            <div style={linkImg}><img style={linkImg} src="https://a0.muscache.com/im/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg?aki_policy=large"/></div>
            <div style={linkText}>Experiences</div>
          </Link>
        </div>
        <div style={linkBlock}>
          <Link style={{display: 'flex', alignItems: 'center'}} to="/restaurants">
            <div style={linkImg}><img style={linkImg} src="https://a0.muscache.com/im/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg?aki_policy=largee"/></div>
            <div style={linkText}>Restaurants</div>
          </Link>
        </div>
      </div>
      <Experiences/>
      <Link style={{display: 'flex'}} to="/experiences"><p>Show all (2000+)</p></Link>
      <Homes/>
      <Link style={{display: 'flex'}} to="/homes"><p>Show all (2000+)</p></Link>
      <Restaurants/>
    <Link style={{display: 'flex'}} to="/restaurants"><p>Show all (2000+)</p></Link>
    </div>
  );
}

export default Explore;
