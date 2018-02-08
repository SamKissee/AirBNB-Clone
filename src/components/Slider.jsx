import React from 'react';
import Slider from 'react-slick';
// import './slick-carousel/slick/slick-theme.css';
// import './slick-carousel/slick/slick.css';


class SliderComp extends React.Component {
  render() {
    let settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    let img = {
      width: '160px',
      margin: '0px auto'
    };

    return(
      <div>
        <style global jsx>
          {`
            .slick-prev:before,
            .slick-next:before {
              color: #767676;
            }

          `}
        </style>
        <style jsx>
          {`
            .div{
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-align: center;
            }
            p{
              text-align: center;
            }

          `}
        </style>
        <br/>
        <h1>Featured Destinations</h1>
        <br/>
        <Slider {...settings}>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/7bff51c1-3c35-47a5-a86c-5ea75ab6be6c.jpg?aki_policy=poster"></img> <p>Los Angeles</p> </div>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/04598d26-f40d-4c44-8725-99e157fbb7ab.jpg?aki_policy=poster"></img> <p>Miami</p> </div>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/650757ef-ed35-49b6-a3a0-ce289ab57b42.jpg?aki_policy=poster"></img> <p>Detroit</p> </div>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/1d8ecdb4-da01-4d35-9c9e-2ef6ca604eca.jpg?aki_policy=poster"></img><p>Tokyo</p></div>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/8346a424-a1dc-4c50-921d-a5226b44529f.jpg?aki_policy=poster"></img><p>Havana</p></div>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/0e2e4ace-7f04-4895-b7c6-482c99e69908.jpg?aki_policy=poster"></img><p>Cape Town</p></div>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/d915ce17-d822-426d-b549-0c7b641fec56.jpg?aki_policy=poster"></img><p>Paris</p></div>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/0c79a1b5-333a-421b-b9e3-effb8b9b9958.jpg?aki_policy=poster"></img><p>Seoul</p></div>
          <div><img style={img} src="https://a0.muscache.com/im/pictures/5be8a4f2-0aab-4bb8-b892-61527da7b550.jpg?aki_policy=poster"></img><p>San Francisco</p></div>
        </Slider>
      </div>
    );
  }
}

export default SliderComp;
