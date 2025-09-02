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
      

      <Container className="mt-4 p-2">
        <Row className="g-4 ">
          <Col xs={12} sm={6} md={6} >
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/2PmrW0mdtTQsTxVKbTMQHd/407068eda68a6adc4725276a0aff04c7/D-K815-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title className='text-center'>Burger</Card.Title>
                  <div className='flex justify-center mt-3'>
                <Button variant="danger" onClick={() => navigate("/burger")}>SEE MORE</Button></div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/2FvZ9vOtAnsmsxrHD2NX9C/5834f918ed8f4b3a0ea470deaab87443/D-K684-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title className='text-center'>Snacks</Card.Title>
                   <div className='flex justify-center mt-3'>
                <Button variant="danger" onClick={() => navigate("/Snak")}>SEE MORE</Button></div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/4yqdKSsr11hvNSycCQqOul/ce79d2b426b2d8c57eb5a853b490390d/D-K870-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title className='text-center'>Rice Bowlz</Card.Title>
       <div className='flex justify-center mt-3'>
                <Button variant="danger" onClick={() => navigate("/rice")}>SEE MORE</Button></div>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={6}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/2jbuIZXNJlxVas2jvQMyHt/c1afeed771efc5134a8952eb86f2fe44/D-K1125.jpg?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title className='text-center'>Beverage</Card.Title>
            <div className='flex justify-center mt-3'>
                <Button variant="danger" onClick={() => navigate("/beva")}>SEE MORE</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/5gmYC6l48VgkcPmOPKq9rd/b7798518d27ebce3d774bb2715b339cc/D-K867-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Plain Rice Bowlz</Card.Title>
                <Card.Text>Aromatic Plain Rice- perfect go along to make a wholesome meal!</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6HMX78tmu2_zjAjTZX8BYb_XoxHC2_hRHQ&s" />
              <Card.Body>
                <Card.Title>Smoky Red Chicken Rice Bowlz</Card.Title>
                <Card.Text>Rice Bowlz Attack!- Grab this aromatic Rice Bowlz with smoky grilled chicken & gravy!</Card.Text>
                <Button variant="danger"onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default App