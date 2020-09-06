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
            <Button variant="success m-1" value="2006" onClick={this.props.getYear}>2006</Button>
            <Button variant="success m-1" value="2007" onClick={this.props.getYear}>2007</Button>
            <Button variant="success m-1" value="2008" onClick={this.props.getYear}>2008</Button>
            <Button variant="success m-1" value="2009" onClick={this.props.getYear}>2009</Button>
            <Button variant="success m-1" value="2010" onClick={this.props.getYear}>2010</Button>
            <Button variant="success m-1" value="2011" onClick={this.props.getYear}>2011</Button>
            <Button variant="success m-1" value="2012" onClick={this.props.getYear}>2012</Button>
            <Button variant="success m-1" value="2013" onClick={this.props.getYear}>2013</Button>
            <Button variant="success m-1" value="2014" onClick={this.props.getYear}>2014</Button>
            <Button variant="success m-1" value="2015" onClick={this.props.getYear}>2015</Button>
            <Button variant="success m-1" value="2016" onClick={this.props.getYear}>2016</Button>
            <Button variant="success m-1" value="2017" onClick={this.props.getYear}>2017</Button>
            <Button variant="success m-1" value="2018" onClick={this.props.getYear}>2018</Button>
            <Button variant="success m-1" value="2019" onClick={this.props.getYear}>2019</Button>
            <Button variant="success m-1" value="2020" onClick={this.props.getYear}>2020</Button>
          </div>
        </div>
        <div>
          <p><u>Successful Launch</u></p>
          <Button variant="success m-1" onClick={this.props.getLaunch} value="true"> True </Button>
          <Button variant="success m-1" onClick={this.props.getLaunch} value="false"> False </Button>
        </div>
        <div>
          <p><u>Successful Landing</u></p>
          <Button variant="success m-1" onClick={this.props.getLand} value="true"> True </Button>
          <Button variant="success m-1" onClick={this.props.getLand} value="false"> False </Button>
        </div>
      </React.Fragment>
    )
  }
}
