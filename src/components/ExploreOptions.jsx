import React from 'react';
import PropTypes from 'prop-types';

function ExploreOptions(props){
  return (
    <div>
      <style jsx>
        {`
          img {
            height: auto;
            width: 100%;
            border-radius: 3px;
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
        <h4>{props.type} - {props.location}</h4>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.rating}</p>
      </div>
    </div>
  );
}

ExploreOptions.propTypes = {
  img: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.string
};

export default ExploreOptions;
