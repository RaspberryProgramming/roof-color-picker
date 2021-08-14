import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Picker from './Picker';
import Display from './Display';
import options from '../options';

function App() {
  const [selected, setSelected] = useState(0);
  const [picker, setPicker] = useState(0);

  return (
    <Container fluid="md" className="color-picker p-5">
      <Row>
        <Col md="auto nopadding">
          <Picker options={options} selected={selected} setSelected={setSelected} picker={picker} setPicker={setPicker}/>
        </Col>
        <Col md="auto nopadding">
          <Display options={options} selected={selected}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
