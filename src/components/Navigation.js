import {
  Container,
  Navbar,
  Nav,
} from 'react-bootstrap';
import React from 'react';

const Navigation = ({toggleWidget}) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://github.com/RaspberryProgramming">Checkout More Projects</Nav.Link>
            <Nav.Link onClick={() => toggleWidget("about")}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
