import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from 'react-bootstrap';
import Picker from './Picker';
import Display from './Display';
import options from '../options';

function App() {
  const [selected, setSelected] = useState(0);
  const [picker, setPicker] = useState(0);
  const [colorSelected, newColorSelected] = useState(true);

  return (<main>
    <Navigation />
    <Container className="color-picker p-5">
      <Row>
        <Col md="auto p-0 m-0">
          <Picker options={options} selected={selected} setSelected={setSelected} picker={picker} setPicker={setPicker} newColorSelected={newColorSelected}/>
        </Col>
        <Col md="auto p-0 ms-auto me-auto">
          <Display options={options} selected={selected} colorSelected={colorSelected} newColorSelected={newColorSelected}/>
        </Col>
      </Row>
    </Container>
  </main>);
}

export default App;
