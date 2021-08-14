import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Picker from './Picker';
import Display from './Display';

const options = [
  { name: "Barkwood", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-barkwood.jpg", displayImages: ["https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/tlhdz-barkwood-house_1000.jpg", "https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/hdz-barkwood-orlando-house_1000.jpg", "https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/hdzbarkwoodorlandohouseaerial1000.jpg"],},
  { name: "Mission Brown", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-mission-brown.jpg", displayImages: ["https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/tlhdz-missionbrown-house_1000.jpg", "https://www.serrano2roofing.com/wp-content/gallery/roof-replacement-and-chimney-repair-on-big-island-rd-in-warwick-ny/Drone-1.jpg", "https://www.serrano2roofing.com/wp-content/gallery/roof-replacement-and-chimney-repair-on-big-island-rd-in-warwick-ny/Drone-2.jpg", "https://www.serrano2roofing.com/wp-content/gallery/church-roof-replacement-in-scotchtown-ny/cover_photo.jpg"]},
  { name: "Birchwood", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-birchwood.jpg", displayImages: ["https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/tlhdz-birchwood-house_1000.jpg"],},
  { name: "Charcoal", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-charcoal.jpg", displayImages: ["https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/tlhdz-charcoal-house_1000.jpg", "https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/hdz-charcoal-windproven-brickhouse-aerialshot_1000.jpg", ],},
  { name: "Biscayne Blue", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-biscayne_blue.jpg", displayImages: ["https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/tlhdz-biscayneblue-house_1000.jpg"],},
  { name: "Driftwood", pickerImage: "https://www.gaf.com/-/media/shingleswatches/720x720swatches/timberline_hd-driftwood.jpg", displayImages: ["https://www.gaf.com/-/media/shingleinstalledhomes/1000x1000/hdz/tlhdz-driftwood-house_1000.jpg"],},
  
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
