import React from 'react';
import {Carousel} from 'react-bootstrap';

const Display = ({options, selected}) => {
  const images = options[selected].displayImages.map((image, index) => {
    return (
      <Carousel.Item key={index} >
        <img alt={index} src={image} className="d-block w-100"/>
      </Carousel.Item>
    );
  });

  return (
    <div className="display">
      <Carousel>
        {images}
      </Carousel>
    </div>
  );
};

export default Display;
