import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

function HeroCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
  <div className='col-md-9 m-auto py-2'>  
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1504221507732-5246c045949b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Sapien Aesthetic University</h2>
          <h4>We offer multiple classes on various skincare topics.</h4>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1507919981044-3b672b208db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h2>Become a skincare expert.</h2>
          <h4>Explore our list of classes today.</h4>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1513624954087-ca7109c0f710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h2>Make an account to get started.</h2>
          <h4>
            Don't miss out on this exciting opportunity. 
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}

export default HeroCarousel;