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
            <Button variant="success m-1">2006</Button>
            <Button variant="success m-1">2007</Button>
            <Button variant="success m-1">2008</Button>
            <Button variant="success m-1">2009</Button>
            <Button variant="success m-1">2010</Button>
            <Button variant="success m-1">2011</Button>
            <Button variant="success m-1">2012</Button>
            <Button variant="success m-1">2013</Button>
            <Button variant="success m-1">2014</Button>
            <Button variant="success m-1">2015</Button>
            <Button variant="success m-1">2016</Button>
            <Button variant="success m-1">2017</Button>
            <Button variant="success m-1">2018</Button>
            <Button variant="success m-1">2019</Button>
            <Button variant="success m-1">2020</Button>
          </div>
        </div>
        <div>
          <p><u>Successful Launch</u></p>
          <Button variant="success m-1"> True </Button>
          <Button variant="success m-1"> False </Button>
        </div>
        <div>
          <p><u>Successful Landing</u></p>
          <Button variant="success m-1"> True </Button>
          <Button variant="success m-1"> False </Button>
        </div>
      </React.Fragment>
    )
  }
}
