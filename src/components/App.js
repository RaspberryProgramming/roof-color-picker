import React, {useState} from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import Picker from './Picker';
import Display from './Display';
import About from './About';
import options from '../options';
import Navigation from './Navigation';

function App() {
  const [selected, setSelected] = useState(0);
  const [picker, setPicker] = useState(0);
  const [index, setIndex] = useState(0);
  const [visibleWidgets, setVisibleWidgets] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const toggleWidget = (widget) => {
    if (visibleWidgets.includes(widget)) {
      setVisibleWidgets(visibleWidgets.filter(word => word !== widget));
    } else {
      setVisibleWidgets([...visibleWidgets, widget]);
    }
  };

  return (<main>
    <Navigation toggleWidget={toggleWidget}/>
    <About visibleWidgets={visibleWidgets} toggleWidget={toggleWidget} />
    <Container className="color-picker p-5">
      <Row>
        <Col md="auto p-0 m-0">
          <Picker options={options} selected={selected} setSelected={setSelected} picker={picker} setPicker={setPicker} setIndex={setIndex} />
        </Col>
        <Col md="auto p-0 ms-auto me-auto">
          <Display options={options} selected={selected} index={index} handleSelect={handleSelect} />
        </Col>
      </Row>

    </Container>
  </main>);
}

export default App;
