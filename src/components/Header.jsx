import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return (
    <div>
      <h1>Header Works!</h1>
      <Link to="/">Home</Link> | <Link to="/homes">Homes</Link> | <Link to="/experiences">Experiences</Link> | <Link to="/restaurants">Restaurants</Link>
    </div>
  );
}

export default Header;
