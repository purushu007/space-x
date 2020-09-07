import React from 'react';
import { Row, Card, CardDeck } from 'react-bootstrap';

export default class RocketList extends React.Component {
  render() {
    return(
      <React.Fragment>
        {this.props.loading ? (
          <div className="results-loading">Loading...</div>
          ) : (
            <div>
              {this.props.rockets != 0 ? (
                <Row>
                  {this.props.rockets.map(rocket =>
                    <CardDeck className="ml-0 rocket-card" >
                      <Card className="p-3 mb-3">
                        <Card.Img variant="top" src={rocket.links.mission_patch_small} style={{backgroundColor: '#f7f7f7'}} alt={rocket.mission_name}/>
                        <Card.Body className="p-0 pt-2">
                          <Card.Title className="font-weight-bold" style={{color: '#4a4f80'}}>{rocket.mission_name} #{rocket.flight_number}</Card.Title>
                          <Card.Text><strong>Mission Ids: </strong>
                            {(rocket.mission_id).length > 0 ? (
                              <ul>{rocket.mission_id.map(ids => <li key={ids}>{ids}</li>)}</ul>
                              ) : (
                                <p> No Mission ID exist </p>
                              )
                            }
                          </Card.Text>
                          <Card.Text><strong>Launch Year: </strong>{rocket.launch_year}</Card.Text>
                          <Card.Text><strong>Successful Launch: </strong>{String(rocket.launch_success)}</Card.Text>
                          <Card.Text><strong>Successful Landing: </strong>{String(rocket.rocket.first_stage.cores.map(land => land.land_success !==null ? land.land_success : "No Information"))}</Card.Text>
                        </Card.Body>
                      </Card>
                    </CardDeck>
                  )}
                </Row>
              ) : (
                <div className="results-loading">No Information Available</div>
                )
              }
            </div>
          )
        }
      </React.Fragment>
    )
  }
}

