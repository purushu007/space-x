import React from 'react';
import axios from 'axios';
import { Row, Card, CardDeck } from 'react-bootstrap';

export default class RocketList extends React.Component {
  state = {
    rockets: [],
  };

  componentDidMount() {
    axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
         .then(res => {
          console.log(res.data);
          this.setState({ rockets: res.data });
        });
  }

  render() {
    return(
      <React.Fragment>
        <Row>
          {this.state.rockets.map(rocket =>
            <CardDeck className="ml-0 rocket-card" >
              <Card className="p-3 mb-3">
                <Card.Img variant="top" src={rocket.links.mission_patch_small} style={{backgroundColor: '#f7f7f7'}}/>
                <Card.Body className="p-0 pt-2">
                  <Card.Title className="font-weight-bold" style={{color: '#4a4f80'}}>{rocket.mission_name} #{rocket.flight_number}</Card.Title>
                  <Card.Text><strong>Mission Ids: </strong>
                    <ul>{rocket.mission_id.map(ids => <li>{ids}</li>)}</ul>
                  </Card.Text>
                  <Card.Text><strong>Launch Year: </strong>{rocket.launch_year}</Card.Text>
                  <Card.Text><strong>Successful Launch: </strong>{String(rocket.launch_success)}</Card.Text>
                  <Card.Text><strong>Successful Landing: </strong>{String(rocket.rocket.first_stage.cores.map(land => land.land_success))}</Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          )}
        </Row>
      </React.Fragment>
    )
  }
}

