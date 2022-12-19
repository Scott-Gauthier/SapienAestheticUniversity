import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Steph from '../assets/Meet-the-owner/MeetStephanie.png';
import Kristen from '../assets/Educators/Kristen/MeetKristen.png';
import Jess from '../assets/Educators/Jess/MeetJess.png';


function AboutUsCarousel() {
    return (
      <div className= "col-md-10 carousel">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {Steph}
            alt="First slide"/>
          <Carousel.Caption>
            <h3>Owner of Sapien Skin</h3>
            <p>An esthetician and science nerd</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {Kristen}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Master Esthetician</h3>
            <p>Passion for client care and treatments</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {Jess}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Master Esthetician</h3>
            <p>
              Lover of potions and playing with lasers
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
  }
  
  export default AboutUsCarousel;
