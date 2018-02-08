import React from 'react';
// import { Link } from 'react-router-dom';

function Search(){
  let searchField = {
    border: '1px solid #cecaca',
    borderRadius: '3px',
    width: '90%',
    height: '30px',
    boxShadow: '0px 0px 30px -11px rgba(0,0,0,0.75)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'
  };
  let search = {
    border: 'none',
    width: '75%',
    fontSize: '20px',
    fontFamily: 'Roboto, sans-serif'
  };
  let searchButton = {
    width: '90px',
    height: '50px',
    backgroundColor: '#FF5A5F',
    color: 'white',
    fontSize: '20px',
    fontWeight: '100',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '3px'
  };
  return (
    <div style={searchField}>
      <input style={search} type="text" placeholder="&#128269;    Try 'Berlin' "></input><button style={searchButton} type="submit">Search</button>
    </div>
  );
}

export default Search;
