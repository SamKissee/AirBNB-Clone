import React from 'react';
import PropTypes from 'prop-types';

function AboutPerson (props){
  return (
    <div>
      <style jsx>
        {`
          img {
            height: auto;
            width: 100%;
            border-radius: 120%;
          }
          h4{
            margin: 0px;
            color: lightblue;
          }
          h3{
            margin: 5px 0px;
          }
          p {
            margin: 5px 0px;
            font-weight: 300;
          }
          .option{
            margin: 10px 8px 0px 8px;
            width: 246px;

          }
        `}
      </style>
      <div className='option'>
        <img src={props.img}></img>
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
        <p>{props.position}</p>
      </div>
    </div>
  );
}

AboutPerson.propTypes = {
  img: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};



export default AboutPerson;
