import React from 'react';
import RocketList from './Components/Rocket/RocketList';
import FilterList from './Components/Filters/FilterList';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container fluid style={{backgroundColor: '#f7f7f7'}} className="justify-content-center">
        <h2 className="font-weight-bold">SpaceX Launch Programs</h2>
        <Row className="justify-content-center">
          <Col xs={8} md={2}>
            <Container fluid style={{backgroundColor: '#fff'}} className="text-center rounded">
              <FilterList />
            </Container>
          </Col>
          <Col xs={9} md={10}>
            <Container fluid>
              <RocketList />
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
