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
  </div>
</div>
        );
    }
}


export default Grid;
