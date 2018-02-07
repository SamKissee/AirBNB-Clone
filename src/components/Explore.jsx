import React from 'react';
import Homes from './Homes';
import Experiences from './Experiences';
import Restaurants from './Restaurants';
import { Link } from 'react-router-dom';

function Explore(){

  return (
    <div>
      <Link to="/homes">Homes</Link> | <Link to="/experiences">Experiences</Link> | <Link to="/restaurants">Restaurants</Link>
      <Experiences/>
      <Homes/>
      <Restaurants/>
    </div>
  );
}

export default Explore;
