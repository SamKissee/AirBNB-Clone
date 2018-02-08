import React from 'react';

function Ad(){
  let adContainer = {

  };
  let ad = {
    display: 'flex',
    margin: '50px auto',
    width: '800px'
  };
  let adText = {

  };
  let adButton = {
    width: '160px',
    height: '50px',
    backgroundColor: '#008489',
    color: 'white',
    fontSize: '20px',
    fontWeight: '100',
    fontFamily: 'Roboto, sans-serif',
    borderRadius: '5px'
  };
  let adPhoto = {

  };
  let adImg = {
    width: '400px'
  };
  return(
    <div style={adContainer}>
      <hr/>
      <div style={ad}>
        <div style={adText}>
          <h1>Earn up to $597 a week hosting in Portland</h1>
          <h3>Turn your extra space into extra income.</h3>
          <button style={adButton}>Find Out More</button>
        </div>
        <div style={adPhoto}>
          <img style={adImg} src="https://a0.muscache.com/ac/pictures/0a2548c9-caf3-430b-b953-26ec96feae2c.jpg?interpolation=lanczos-none&size=large&output-format=jpg&output-quality=70"></img>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default Ad;
