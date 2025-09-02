import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Img5 from "./assets/kkk.png";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
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
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/2jbuIZXNJlxVas2jvQMyHt/c1afeed771efc5134a8952eb86f2fe44/D-K1125.jpg?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Rizz Fizz Tangy Cooler</Card.Title>
                <Card.Text>Sip the Epic! Refreshing and Tangy Cooler with an exciting Boba Twist!</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K1023.jpg?ver=71.94" />
              <Card.Body>
                <Card.Title>Dew Mojito Reusable Bottle</Card.Title>
                <Card.Text>A refreshing drink with Mountain Dew, lime and soda to beat the heat</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K1021.jpg?ver=71.94" />
              <Card.Body>
                <Card.Title>7Up Reusable Bottle</Card.Title>
                <Card.Text>7Up in a Eater reusable bottle,ime and soda to beat the heat</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/45FYhHRpRebHUC0wNGpTcU/810af36ba1125bc6e36e366f8b52ee0b/D-K485-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Mountain Dew Reusable Bottle</Card.Title>
                <Card.Text>Pepsi Can 300 ml</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/73jD94lGZuWbL2Ua6AwcU/a0eda4d1b131b0adc5d07950d3727eea/D-K486-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Pepsi Zero Sugar Can 300 ml</Card.Title>
                <Card.Text>Pepsi Black Can 300 ml</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/4DvgU3EvDWkbptoK6KcC8R/40b46113ad05fcc453e107c72edf288e/D-K487-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>7UP Can with 300 ml</Card.Title>
                <Card.Text>7UP Can 300 ml</Card.Text>
                <Button variant="danger"onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
