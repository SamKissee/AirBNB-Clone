import React from 'react';
import ExploreOptions from './ExploreOptions';
import { Link } from 'react-router-dom';

function Homes(){
  let homesList = [
    {
      img: 'https://a0.muscache.com/im/pictures/1141535/da4b9b6b_original.jpg?aki_policy=large',
      type: 'ENTIRE APARTMENT',
      location: '2 BEDS',
      name: 'Palazzo Cattolica Art-Apartment',
      price: '$114 per night - Free cancellation',
      rating: 'Five Stars 235 - Superhost'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/6174600/15fb85b3_original.jpg?aki_policy=large',
      type: 'ENTIRE HOUSE',
      location: '4 BEDS',
      name: 'Unique Architecture Cave House',
      price: '$317 per night',
      rating: 'Five Stars 122 - Superhost'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/4913397/d2084422_original.jpg?aki_policy=large',
      type: 'ENTIRE HOUSE',
      location: '5 BEDS',
      name: 'Douro Villa with swimming pool, Penafiel, Portugal',
      price: '$369 per night',
      rating: 'Five Stars 70 - Superhost'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/22903552/b41736ff_original.jpg?aki_policy=large',
      type: 'ENTIRE HOUSE',
      location: '4 BEDS',
      name: 'CHARMING HOUSE Seaside & Pine Forest',
      price: '$198 per night',
      rating: 'Five Stars 70 - Superhost'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/27140516/751a4207_original.jpg?aki_policy=large',
      type: 'ENTIRE CABIN',
      location: '1 BED',
      name: 'Affordable Garden Gingerbread House',
      price: '$175 per night',
      rating: 'Five Stars 201 - Superhost'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/15273358/d7329e9a_original.jpg?aki_policy=large',
      type: 'ENTIRE HOUSE',
      location: '2 BEDS',
      name: 'I SETTE CONI - TRULLO EDERA',
      price: '$76 per night - Free cancellation',
      rating: 'Five Stars 110 - Superhost'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/51c82da7-bccc-4ec2-ab44-e5ca6278bd91.jpg?aki_policy=large',
      type: 'ENTIRE VILLA',
      location: '3 BEDS',
      name: 'Private Family Love Villa4 close to 66Beach BALI',
      price: '$164 per night',
      rating: 'Four and a Half Stars 42'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/79452273/12bc436d_original.jpg?aki_policy=large',
      type: 'ENTIRE APARTMENT',
      location: '1 BED',
      name: 'City Penthouse in Central Cape Town',
      price: '$170 per night',
      rating: 'Five Stars 166'
    }
  ];

  return (
    <div>
      <h1>Homes</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', margin: '10px'}}>
        {homesList.map((home, index) =>
          <ExploreOptions
            name={home.name}
            type={home.type}
            price={home.price}
            location={home.location}
            img={home.img}
            rating={home.rating}
            key={index}/>
        )}
      </div>


    </div>
  );
}

export default Homes;
