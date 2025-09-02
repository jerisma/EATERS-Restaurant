import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";

import Img5 from "./assets/kkk.png";
import Img4 from "./assets/kk.png";
import Img6 from "./assets/kkkk.png";
import Img44 from "./assets/pa.png";
import Img444 from "./assets/paa.png";
import Img4444 from "./assets/pp.jpg";
import Img44444 from "./assets/ppp.png";
import Img444444 from "./assets/ppp.png";

import './about.css'

const App = () => {
  return (
    <div>
 
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="fhome">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/flocatio">Location</Nav.Link>
              <NavDropdown title="About" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/about">Our Philosophy</NavDropdown.Item>
                <NavDropdown.Item href="/ourstory">Our Story</NavDropdown.Item>
                <NavDropdown.Item href="/press">Press</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Menu" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/Snak">Snacks</NavDropdown.Item>
                <NavDropdown.Item href="/rice">Rice Bowlz</NavDropdown.Item>
                <NavDropdown.Item href="/burger">Burger</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Veg & Non-Veg</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className="d-flex align-items-center">
              <Navbar.Brand href="https://www.zomato.com/">
                Online Orders
              </Navbar.Brand>
              <div className="d-flex align-items-center ms-3">
                <img
                  src={Img5}
                  alt="logo"
                  style={{ height: "60px", width: "90px" }}
                  className="me-2"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
<div className='bg-blue-200'>
   <h1 style={{color:'hwb(183 5% 64%)', fontSize:'60px'}} className='text-center mt-5 '>PRESS</h1>
      <Container className="mt-4">
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <Image src={Img4} rounded fluid />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Image src={Img5} rounded fluid />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Image src={Img6} rounded fluid />
          </Col>
        </Row>
      </Container>
       <Container className="mt-4">
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <Image src={Img44} rounded fluid />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Image src={Img444} rounded fluid />
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <Image src={Img4444} rounded fluid />
          </Col>
        </Row>
      </Container>
       <Container className="mt-4">
        <Row>
          <Col xs={12} md={4} className="mb-3">
            <Image src={Img44444} rounded fluid />
          </Col>
         
        
        </Row>
      </Container>
      
    </div>
    </div>
  )
}

export default App

