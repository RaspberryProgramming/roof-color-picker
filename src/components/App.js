import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import Picker from './Picker';
import Display from './Display';

const options = [
  { name: "Barkwood", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-barkwood.jpg", displayImages: ["https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/tlhdz-barkwood-house_1000.jpg", "https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/hdz-barkwood-orlando-house_1000.jpg", "https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/hdzbarkwoodorlandohouseaerial1000.jpg"],},
  { name: "Birchwood", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-birchwood.jpg", displayImages: [],},
  { name: "Charcoal", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-charcoal.jpg", displayImages: ["https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/tlhdz-charcoal-house_1000.jpg", "https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/hdz-charcoal-windproven-brickhouse-aerialshot_1000.jpg", ],},

];

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <Container fluid="md" className="color-picker">
      <Row>
        <Col md="auto nopadding">
          <Picker options={options} selected={selected} setSelected={setSelected}/>
        </Col>
        <Col md="auto nopadding">
          <Display options={options} selected={selected}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
