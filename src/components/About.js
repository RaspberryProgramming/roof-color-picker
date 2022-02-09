import { Container } from 'react-bootstrap';
import React from 'react';

const About = ({visibleWidgets, toggleWidget}) => {
  if (!(visibleWidgets.includes("about"))) {
    return (<div></div>);
  }

  return (
    <Container className="about-container rounded d-flex flex-column align-items-left justify-content-start">
      <div className="bg-secondary bg-gradient text-white">
        <svg onClick={() => toggleWidget("about")} xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
      <div className="text d-flex flex-column justify-content-center">
        <div className="d-flex flex-column p-3 mb-2 bg-secondary text-white text-center">
          <h4>Roof Color Picker</h4>
          <p>Show customers your projects in an easy to use interface.</p>
          <hr />
        </div>
        <div className="d-flex flex-column p-5">
          <p>Please let me know what you think. You can contact me, or see other projects at the links below.</p>
          <p>Created by Camerin Figueroa</p>
          <p>Portfolio: <a href="https://www.camscode.com/">camscode.com</a></p>
          <p>Contact: <a href="mailto:cam@camscode.com">cam@camscode.com</a></p>
          <p>Github: <a href="https://github.com/RaspberryProgramming" target="_blank" rel="noopener noreferrer">RaspberryProgramming</a></p>
          <hr />
          <p>Images sourced from:</p>
          <a href="https://www.serrano2roofing.com/" target="_blank" rel="noopener noreferrer">Serrano2Roofing</a>
          <a href="https://www.gaf.com/" target="_blank" rel="noopener noreferrer">GAF Roofing</a>
        </div>
      </div>
    </Container>
  );
};

export default About;
