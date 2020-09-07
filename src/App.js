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
    launchYear: 0,
    launchSuccess: true,
    landSucess: true,
    filterRockets: [],
    allData: "https://api.spaceXdata.com/v3/launches?limit=100",
  };

  async componentDidMount() {
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ rockets: data, loading: false });
  };

  getLaunchYear = async (state) => {
    this.setState({loading: true});
    const launchYearUrl = this.state.allData+"&launch_year="+state.launchYear;
    const res = await fetch(launchYearUrl);
    const data = await res.json();
    this.setState({filterRockets: data, loading: false});
  }

  getLaunchSuccess = async (state) => {
    this.setState({loading: true});
    const launchSuccessUrl = this.state.allData+"&launch_success="+state.launchSuccess;
    const res = await fetch(launchSuccessUrl);
    const data = await res.json();
    this.setState({filterRockets: data, loading: false});
  }

  getSuccessLanding = async(state) => {
    this.setState({loading: true});
    const landSuccessUrl = this.state.allData+"&land_success="+state.landSucess;
    const res = await fetch(landSuccessUrl);
    const data = await res.json();
    this.setState({filterRockets: data, loading: false});
  }

  updateYearFilterParams = async (val, key) => {
    if(key == "year") {
      await this.setState({launchYear: val})
    }
    this.getLaunchYear(this.state);
  }

  updateLaunchFilterParams = async(val, key) => {
    if(key == "status") {
      await this.setState({launchSuccess: val});
    }
    this.getLaunchSuccess(this.state);
  }

  updateLandFilterParams = async(val, key) => {
    if (key == "landingstatus") {
      await this.setState({landSucess: val});
    }
    this.getSuccessLanding(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Container fluid style={{backgroundColor: '#f7f7f7'}} className="justify-content-center">
            <h2 className="font-weight-bold">SpaceX Launch Programs</h2>
            <Row className="justify-content-center">
              <Col xs={11} md={2} className="pb-3 mb-3 filter-section">
                <Container fluid className="pb-3 text-center rounded" style={{backgroundColor: '#fff'}}>
                  <FilterList getYear={this.updateYearFilterParams} getLaunch={this.updateLaunchFilterParams} getLand={this.updateLandFilterParams}/>
                </Container>
              </Col>
              <Col xs={12} md={10} className="rockets-section">
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
