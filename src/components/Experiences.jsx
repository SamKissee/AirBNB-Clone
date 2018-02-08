import React from 'react';
import ExploreOptions from './ExploreOptions';

function Experiences(){
  let experienceList = [
    {
      img: 'https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large',
      type: 'Surf Lesson',
      location: 'Bali',
      name: 'The Surf Champion',
      price: '$12 per person',
      rating: 'Five Stars 52'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large',
      type: 'Surf Lesson',
      location: 'Bali',
      name: 'The Surf Champion',
      price: '$12 per person',
      rating: 'Five Stars 52'
    },
    {
      img: 'https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=large',
      type: 'Surf Lesson',
      location: 'Bali',
      name: 'The Surf Champion',
      price: '$12 per person',
      rating: 'Five Stars 52'
    }
  ];

  return (
    <div>
      <h1>Experiences</h1>
      <div style={{display: 'flex'}}>
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
