import React from 'react';
import AboutPerson from './AboutPerson';


function About (){
  let teamList = [
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'CEO'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'COO'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'CPO'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'COP'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'Admin'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'Marketing'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'Janitor'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'Security'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'Chef'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'Designer'
    },
    {
      name: 'Jim Bob',
      img: 'https://andygreenwell.com/wp-content/uploads/2017/06/best-business-headshot-photographers-headshots_24469-1.jpg',
      location: 'Iowa',
      position: 'Cool Guy'
    }
  ]
  return(
    <div>
      <h1>Our Team</h1>
      <div style={{display: 'flex', flexWrap: 'wrap', margin: '10px'}}>
        {teamList.map((team, index) =>
          <AboutPerson
            name={team.name}
            location={team.location}
            img={team.img}
            position={team.position}
            key={index}/>
        )};
      </div>
    </div>
  );
}

export default About;
