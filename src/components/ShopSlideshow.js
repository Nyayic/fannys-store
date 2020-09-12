import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';
// import Sidenav from './SideNav';

const ShopSlideshow = () => {
    return(
      <div className="row">

        <div className="col-md-3">
          <h3>Product Categories</h3>

        </div>
    
      <div className="col-md-6">
        <Carousel>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src= {require("../static/images/slide-03.jpg")}
            alt="Lowest Prices you can Trust"
          />
          <Carousel.Caption>
            <h3>Lowest Prices you can Trust</h3>
            <button className="btn btn-danger">Buy On Discount </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {require("../static/images/slide-02.jpg")}
            alt="Checkout for Flash Friday Sales"
          />

        <Carousel.Caption>
          <h3>Checkout for Flash Friday Sales</h3>
          <button className="btn btn-danger">Order Now</button>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../static/images/slide-01.jpg")}
            alt="Get your Latest Fashion trends. Shop Now!"
          />

        <Carousel.Caption>
          <h3>Get your Latest Fashion trends. Shop Now!</h3>
          <button className="btn btn-danger">Shop Now!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>

<div className="col-md-3">
  <h3>Sell on Fannys store</h3>
  <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      <b>Sell your products</b>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <Icon.Shop/> 
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <b>Official Distributors</b>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <Icon.ArrowRepeat/>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <b>Delivery Timelines</b>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <Icon.Bicycle/>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
</div>
    )
};

export default ShopSlideshow;
