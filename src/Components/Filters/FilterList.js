import React from 'react';
import { Button } from 'react-bootstrap';

export default class FilterList extends React.Component {
  render() {
    return(
      <React.Fragment>
        <p className="text-left font-weight-bold">Filters</p>
        <div>
          <p><u>Launch Year</u></p>
          <div>
            <Button variant="success m-1" onClick={() => this.props.getYear(2006, "year")}>2006</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2007, "year")}>2007</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2008, "year")}>2008</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2009, "year")}>2009</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2010, "year")}>2010</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2011, "year")}>2011</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2012, "year")}>2012</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2013, "year")}>2013</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2014, "year")}>2014</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2015, "year")}>2015</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2016, "year")}>2016</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2017, "year")}>2017</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2018, "year")}>2018</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2019, "year")}>2019</Button>
            <Button variant="success m-1" onClick={() => this.props.getYear(2020, "year")}>2020</Button>
          </div>
        </div>
        <div>
          <p><u>Successful Launch</u></p>
          <Button variant="success m-1" onClick={() => this.props.getLaunch(true, "status")}> True </Button>
          <Button variant="success m-1" onClick={() => this.props.getLaunch(false, "status")}> False </Button>
        </div>
        <div>
          <p><u>Successful Landing</u></p>
          <Button variant="success m-1" onClick={() => this.props.getLand(true, "landingstatus")}> True </Button>
          <Button variant="success m-1" onClick={() => this.props.getLand(true, "landingstatus")}> False </Button>
        </div>
      </React.Fragment>
    )
  }
}
