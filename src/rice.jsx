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
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/4yqdKSsr11hvNSycCQqOul/ce79d2b426b2d8c57eb5a853b490390d/D-K870-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Popcorn Chicken Rice Bowlz</Card.Title>
                <Card.Text>Rice Bowlz Attack!- Grab this aromatic Rice Bowlz with chicken popcorn & gravy!</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/1mJ7OrVXe5r1vnfvgZkcrz/4380a2766623b081eb1513a04a89ea34/D-K872-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Classic Chicken Rice Bowlz</Card.Title>
                <Card.Text>Rice Bowlz Attack!- Grab this aromatic Rice Bowlz rice with 1 piece Hot & Cripsy & gravy</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K1071.jpg?ver=71.94" />
              <Card.Body>
                <Card.Title>Duo Popcorn Chicken Rice Bowlz</Card.Title>
                <Card.Text>Save Rs. 30 on beloved Chicken Rice Bowlz served with signature Popcorn</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/DCrxVeOxqYm6V0IrYCsmm/f0567f1477f75e91872220025d7b8a58/D-K869-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Veg Rice Bowlz</Card.Title>
                <Card.Text>Rice Bowlz Attack!- Grab this aromatic Rice Bowlz with gravy now!</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
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
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
