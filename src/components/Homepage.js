import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import * as Icon from 'react-bootstrap-icons';
// import Sidenav from './SideNav';

const Homepage = () => {
    return(
      <div className="container">
      <div className="row">
        

         <div className="col-md-3">
          <h5>Frequently searched</h5>
          <a href="/jeans">
          <img
            className="d-block w-100"
            src= {require("../static/images/jeans-02.jpg")}
            alt="Lowest Prices you can Trust"
            height="190px"
          />
          </a>
          <br></br>
          <a href="#jeans">
          <img
            className="d-block w-100 thumbnail"
            src= {require("../static/images/jeans-01.jpg")}
            alt="Lowest Prices you can Trust"
            width="50px" height="190px"
          />
          </a>
          

        </div> 

      <div className="col-md-7 mt-4">
        <Carousel>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src= {require("../static/images/slide-06.jpg")}
            alt="Lowest Prices you can Trust"
            
          />
          <Carousel.Caption>
            <h1>Lowest Prices you can Trust</h1>
            <button className="btn btn-danger">Buy On Discount </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src= {require("../static/images/slide-07.jpg")}
            alt="Checkout for Flash Friday Sales"
          />

        <Carousel.Caption>
          <h1>Checkout for Flash Friday Sales</h1>
          <button className="btn btn-danger">Order Now</button>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../static/images/slide-09.jpg")}
            alt="Get your Latest Fashion trends. Shop Now!"
          />

        <Carousel.Caption>
          <h1 className="text-center">Get your Latest Fashion trends. Shop Now!</h1>
          <button className="btn btn-danger">Shop Now!</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>

<div className="col-md-2 mt-4">
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
        <Icon.Bicycle/></Card.Body>
    </Accordion.Collapse>
  </Card>

  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      <b>Weekly Deals</b>
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
        <Icon.Bicycle/></Card.Body>
    </Accordion.Collapse>
  </Card>



</Accordion>
</div>

{/* Recommeded items section */}
<br />
<br />

<h4 className="pull-left mt-4">Recommended For You!</h4>
  <div className="row">

  <div className="col-sm-3">
    <a href="/mens-wear" style={{textdecoration: 'none'}}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../static/images/slide-01.jpg")} />
        <Card.Body>
          <Card.Title>Mens Cotton T-shirt</Card.Title>
          <Card.Text> UGX 40,000     </Card.Text>
        </Card.Body>
      </Card>
    </a>
  </div>

    <div className="col-sm-3">
      <a href="/">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../static/images/slide-01.jpg")} />
        <Card.Body>
          <Card.Title>4 Packs of Black Shirts</Card.Title>

          <Card.Text>UGX 85,000</Card.Text>
      </Card.Body>
    </Card>
   </a>
  </div>
    <div className="col-sm-3">
      <a href="/tshirts">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../static/images/slide-01.jpg")} />
        <Card.Body>
          <Card.Title>4 Pairs of Socks</Card.Title>
          <Card.Text>   UGX 12,500   </Card.Text>
        </Card.Body>
      </Card>
      </a>
    
    </div>
    
    <div className="col-sm-3">
      <a href="/tshirts">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require("../static/images/slide-01.jpg")} />
        <Card.Body>
          <Card.Title>Empako Yange-Tshirt</Card.Title>
          <Card.Text>  UGX 50,000    </Card.Text>
        </Card.Body>
      </Card>
      </a>
   
    
    </div>
  </div>
  {/* End of recommended row */}

</div>
</div>

    )
};

export default Homepage;
