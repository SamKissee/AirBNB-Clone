import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  let headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    textDecoration: 'none'

  };
  let headerImg = {
    width: '50px',
    height: '50px'
  };
  let headerLink = {
    textDecoration: 'none',
    padding: '10px'
  };
  let headerNav = {
    // margin: '25px'
  };

  return (
    <div style={headerStyle}>
      <img style={headerImg} src="http://logodatabases.com/wp-content/uploads/2017/06/airbnb_logo_small.png"></img>
      <div style={headerNav}>
        <Link style={headerLink} to="/">Become a Host</Link> <Link style={headerLink} to="/">Help</Link> <Link style={headerLink} to="/">Sign Up</Link> <Link style={headerLink} to="/">Log In</Link>
      </div>

    </div>
  );
}

export default Header;
