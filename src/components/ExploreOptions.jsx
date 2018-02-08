import React from 'react';
import PropTypes from 'prop-types';

function ExploreOptions(props){
  return (
    <div>
      <style jsx>
        {`
          img {
            height: 175px;
            width: auto;
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
        `}
      </style>
      <img src={props.img}></img>
      <h4>{props.type} - {props.location}</h4>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{props.rating}</p>
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
