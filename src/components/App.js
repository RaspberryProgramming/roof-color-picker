import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import Picker from './Picker';
import Display from './Display';
import options from '../options';

function App() {
  const [selected, setSelected] = useState(0);
  const [picker, setPicker] = useState(0);

  return (<main>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container className="color-picker p-5">
      <Row>
        <Col md="auto nopadding">
          <Picker options={options} selected={selected} setSelected={setSelected} picker={picker} setPicker={setPicker}/>
        </Col>
        <Col md="auto nopadding">
          <Display options={options} selected={selected}/>
        </Col>
      </Row>
    </Container>
  </main>);
}

export default App;
