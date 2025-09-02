
import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Img5 from "./assets/kkk.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Bar1 from './assets/bur1.jpg'
import Bar2 from './assets/bar2.jpg'
import Bar3 from './assets/bur3.jpg'
import Bar4 from './assets/bur4.jpg'
import Bar5 from './assets/bur5.jpg'
import Bar6 from './assets/bur6.jpg'

const App = () => {
  return (
    <div>
     <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand
          onClick={() => navigate("/")}
          style={{
            color: "red",
            fontFamily: "cursive",
            fontSize: "2rem",  
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          EATER
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/fhome">Home</Nav.Link>
            <Nav.Link href="/flocatio">Location</Nav.Link>

            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item href="/about">Our Philosophy</NavDropdown.Item>
              <NavDropdown.Item href="/ourstory">Our Story</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Menu" id="menu-dropdown">
              <NavDropdown.Item href="/Snak">Snacks</NavDropdown.Item>
              <NavDropdown.Item href="/rice">Rice BowlZ</NavDropdown.Item>
              <NavDropdown.Item href="/burger">Burger</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/beva">Beverage</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="d-flex align-items-center">
            <Nav.Link href="/forms">Online Orders</Nav.Link>
                        <Nav.Link href="/contact">Contact us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    
      <Container className="mt-4">
        <Row className="g-4">
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={Bar1} />
              <Card.Body>
                <Card.Title>Upto Rs 100 off</Card.Title>
                <Card.Text>Min. Order Value 699</Card.Text>
                <Button variant="dark">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={Bar2} />
              <Card.Body>
                <Card.Title>2 pc Hot & Crispy Chicken @ Rs 99</Card.Title>
                <Card.Text>Min. Order Value 499</Card.Text>
                <Button variant="dark">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={Bar3} />
              <Card.Body>
                <Card.Title>2 pc Hot & Crispy Chicken @ Rs 99</Card.Title>
                <Card.Text>Min. Order Value 499</Card.Text>
                <Button variant="dark">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={Bar4} />
              <Card.Body>
                <Card.Title>Rs 75 Off</Card.Title>
                <Card.Text>Min. Order Value 599</Card.Text>
                <Button variant="dark">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={Bar5} />
              <Card.Body>
                <Card.Title>Free Veg Zinger</Card.Title>
                <Card.Text>Min. Order Value 499</Card.Text>
                <Button variant="dark">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src={Bar6} />
              <Card.Body>
                <Card.Title>Free Double Chicken Roll</Card.Title>
                <Card.Text>Min. Order Value 999</Card.Text>
                <Button variant="dark">Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App

