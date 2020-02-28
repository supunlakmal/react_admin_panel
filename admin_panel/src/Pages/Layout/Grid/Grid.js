import React, { Component } from "react";


// component

import Col from '../../../Components/Col';



class Grid extends Component {



    componentDidMount() {


    }

    componentWillUnmount() {

    }


    render() {

       

        return (



<div class="container">
  <div class="row">
      <Col className={'col-sm'}>
      One of three columns
    </Col>
    <Col className={'col-sm'}>
      One of three columns
    </Col>
    <Col className={'col-sm'}>
      One of three columns
    </Col>


<Col className={'col-12'}>

<div class="row justify-content-start">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      One of two columns
    </div>
    <div class="col-4">
      One of two columns
    </div>
  </div>
</Col>

  </div>
</div>
        );
    }
}


export default Grid;
