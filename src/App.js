import React from 'react';
import RocketList from './Components/Rocket/RocketList';
import FilterList from './Components/Filters/FilterList';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const landExists = (land_success, flag) => land_success.some((el) => el.land_success === flag)
export default class App extends React.Component {
  state = {
    loading: true,
    rockets: [],
    filterYear: null,
    filterLaunch: null,
    filterLand: null,
    launchYear: 0,
    launchSuccess: true,
    filterRockets: [],
  };

  async componentDidMount() {
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ rockets: data, loading: false });
  };

  getLaunchYearAndSuccess = (state) => {
    const filterRockets = this.state.rockets.filter(e => e.launch_year == state.launchYear && e.launch_success == state.launchSuccess );
    this.setState({filterRockets: filterRockets});
  }


  getSuccessLanding = (val) => {
    const successLanding = this.state.filterRockets.filter(e => landExists(e.rocket.first_stage.cores, val));
    this.setState({filterRockets: successLanding});
    console.log(this.state.filterRockets);
  }

  updateFilterParams = async (val, key) => {
    if(key == "year") {
      await this.setState({launchYear: val})
    }
    if(key == "status") {
      await this.setState({launchSuccess: val});
    }
    this.getLaunchYearAndSuccess(this.state);
  }


  getYear = (val) => {
    this.setState({loading: true});
    this.state.filterYear = val.target.value;
    const Yearfilter = this.state.rockets.filter(rocket => rocket.launch_year === this.state.filterYear);
    this.setState({ rockets: Yearfilter, loading: false });
  }

  getLaunch = (val) => {
    this.setState({loading: true});
    this.state.filterLaunch = val.target.value;
    console.log(true === this.state.filterLaunch);
    const Launchfilter = this.state.rockets.filter(rocket => String(rocket.launch_success) === String(this.state.filterLaunch));
    this.setState({ rockets: Launchfilter, loading: false });
  }

  getLand = (val) => {
    this.setState({loading: true});
    this.state.filterLand = val.target.value;
    console.log(this.state.filterLand);
    const Landfilter = this.state.rockets.filter(rocket => rocket.rocket.first_stage.cores.map(land => String(land.land_success)) === String(this.state.filterLand));
    this.setState({ rockets: Landfilter, loading: false });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Container fluid style={{backgroundColor: '#f7f7f7'}} className="justify-content-center">
            <h2 className="font-weight-bold">SpaceX Launch Programs</h2>
            <Row className="justify-content-center">
              <Col xs={8} md={2}>
                <Container fluid style={{backgroundColor: '#fff'}} className="text-center rounded">
                  <FilterList getYear={this.updateFilterParams} getLaunch={this.updateFilterParams} getLand={this.getSuccessLanding}/>
                </Container>
              </Col>
              <Col xs={9} md={10}>
                <Container fluid>
                  <RocketList rockets={(this.state.launchYear == 0) ? this.state.rockets : this.state.filterRockets} loading={this.state.loading}/>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}
