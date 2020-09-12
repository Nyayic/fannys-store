import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';


const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Fanny's Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#ladies-wear">Ladies Wear</Nav.Link>
          <Nav.Link href="#mens-wear">Mens Wear</Nav.Link>

          {/* Drop down starts */}
          <NavDropdown title="Product Categories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#jeans">Jeans</NavDropdown.Item>
            <NavDropdown.Item href="#shirts">Shirts</NavDropdown.Item>
            <NavDropdown.Item href="#dresses">Dresses</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#Skirts">Skirts</NavDropdown.Item>
          </NavDropdown>

        </Nav>
        <Nav>
          <Nav.Link href="#cart">
            <Icon.Cart/> Cart
            </Nav.Link>
          <Nav.Link eventKey={2} href="#login">
            <Icon.Person/>
            Login
          </Nav.Link>
        </Nav>
  </Navbar.Collapse>
</Navbar>

  );
};


export default NavBar;