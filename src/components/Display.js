import React from 'react';
import {Carousel} from 'react-bootstrap';

const Display = ({options, selected, colorSelected, newColorSelected }) => {
  const images = options[selected].displayImages.map((image, index) => {
    return (
      <Carousel.Item key={index} className={`${index === 0 && colorSelected ? 'active': ''}`}>
        <img alt={index} src={image} className="d-block w-100"/>
      </Carousel.Item>
    );
  });

  if(colorSelected) {
    newColorSelected(false);
  }

  return (
    <div className="display">
      <Carousel>
        {images}
      </Carousel>
    </div>
  );
};

export default Display;
