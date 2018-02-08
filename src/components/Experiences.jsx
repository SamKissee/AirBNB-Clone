import React from 'react';
import ExploreOptions from './ExploreOptions';
import { Link } from 'react-router-dom';

function Experiences(){
  let experienceList = [
    {
      img: 'https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large',
      type: 'SURF LESSON',
      location: 'BALI',
      name: 'The Surf Champion',
      price: '$12 per person',
      rating: 'Five Stars 52'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/571e0e7b-6867-4c44-bd91-776a5d698fae.jpg?aki_policy=large',
      type: 'HISTORY',
      location: 'PARIS',
      name: 'Paris\' Best Kept Secrets Tour',
      price: '$63 per person',
      rating: 'Five Stars 207'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/dc638487-3cc5-41a0-b68a-85633f955349.jpg?aki_policy=large',
      type: 'YOGA',
      location: 'SAN FRANCISCO',
      name: 'Silent Disco Beach Yoga',
      price: '$35 per person',
      rating: 'Five Stars 238'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/a7e59c75-a34d-4964-81e4-894e9b6afa66.jpg?aki_policy=large',
      type: 'SANCTUARY VISIT',
      location: 'SEATTLE',
      name: 'Wolf Encounter',
      price: '$175 per person',
      rating: 'Five Stars 481'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/de0b473d-e035-432b-9d03-11f4198907da.jpg?aki_policy=large',
      type: 'COOKING CLASS',
      location: 'BANGKOK',
      name: 'Hands-on Authentic Thai Cooking Class',
      price: '$41 per person',
      rating: 'Five Stars 84'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/040c3707-a625-43c0-8f35-b4fe9ef13d02.jpg?aki_policy=large',
      type: 'YOGA CLASS',
      location: 'HAVANA',
      name: 'Rooftop hatha yoga with an instructor',
      price: '$10 per person',
      rating: 'Four and a half stars 27'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/42b49e29-ecc2-4be0-b0ea-c4b560cfe2e7.jpg?aki_policy=large',
      type: 'HELICOPTER RIDE',
      location: 'RIO DE JANEIRO',
      name: 'Helicopter Flight',
      price: '$176 per person',
      rating: 'Five Stars 35'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/53b0f970-d730-4d02-a748-1d14c6b6aa8d.jpg?aki_policy=large',
      type: 'ENTERTAINMENT',
      location: 'LOS ANGELES',
      name: 'Learn to fly a plane above Los Angeles',
      price: '$130 per person',
      rating: 'Five Stars 146'
    }
  ];

  return (
    <div>
      <h1>Experiences</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', margin: '10px'}}>
        {experienceList.map((experience, index) =>
          <ExploreOptions
            name={experience.name}
            type={experience.type}
            price={experience.price}
            location={experience.location}
            img={experience.img}
            rating={experience.rating}
            key={index}/>
        )}
      </div>
        

    </div>
  );
}

export default Experiences;
