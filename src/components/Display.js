import React from 'react';
import {Carousel} from 'react-bootstrap';

const Display = ({options, selected, index, handleSelect}) => {
  const images = options[selected].displayImages.map((image, index) => {
    return (
      <Carousel.Item key={index} >
        <img alt={index} src={image} className="d-block w-100"/>
          <Carousel.Caption>
            <a className="btn btn-dark" href={image} target="_blank" rel="noreferrer">Open in Another Tab</a>
          </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <div className="display">
      <h3>{options[selected].name}</h3>
      <Carousel nextLabel={""} prevLabel={""} activeIndex={index} onSelect={handleSelect} >
        {images}
      </Carousel>
    </div>
  );
};

export default Display;
