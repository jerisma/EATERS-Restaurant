import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Img5 from "./assets/kkk.png";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
            <Nav.Link  onClick={() => navigate("/fhome")}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate("/flocatio")}>Location</Nav.Link>

            <NavDropdown title="About" id="about-dropdown">
              <NavDropdown.Item onClick={() => navigate("/about")}>Our Philosophy</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/ourstory")}>Our Story</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Menu" id="menu-dropdown">
              <NavDropdown.Item onClick={() => navigate("/Snak")}>Snacks</NavDropdown.Item>
              <NavDropdown.Item  onClick={() => navigate("/rice")}>Rice BowlZ</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/burger")}>Burger</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate("/beva")}>Beverage</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="d-flex align-items-center">
            <Navbar.Brand onClick={() => navigate("/forms")}>Online Orders</Navbar.Brand>
            <Nav.Link  onClick={() => navigate("/contact")}>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

      <Container className="mt-4">
        <Row className="g-4">
          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K1157.jpg?ver=71.85" />
              <Card.Body>
                <Card.Title>2 Chana Burgers</Card.Title>
                <Card.Text>Relish 2 Chana burgers</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/2PmrW0mdtTQsTxVKbTMQHd/407068eda68a6adc4725276a0aff04c7/D-K815-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Spicy Zinger Burger</Card.Title>
                <Card.Text>Relish the Caribbean spicy zinger</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/Ey8aQAKF2ilxvgwVc4xlL/ab3394572dc54aca3500fb50b8135f66/D-PR00002413-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Spicy Zinger Burger & Chicken Meal</Card.Title>
                <Card.Text>New Caribbean Spicy  Burger with 1 Pc Hot </Card.Text>
                <Button variant="danger"onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/3LGaWsCfBdFkMiTO1SCHFm/49fe4e05ebc8f3e5b7c06f95de5fa04a/D-PR00002582-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Zinger Pro Pepsi Bottle Combo</Card.Title>
                <Card.Text>Get Pepsi 330ml Reusable Bottle with Zinger Pro Burger</Card.Text>
                <Button variant="danger"onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://images.ctfassets.net/wtodlh47qxpt/7CfEtEhYbDMoz47g2mOAq9/a4213ce3bcd2d18fa63bcd5107ca8611/D-K696-prod?h=600&w=800&fm=webp&fit=fill" />
              <Card.Body>
                <Card.Title>Zinger Pro Burger</Card.Title>
                <Card.Text>Premium burger with crunchy chicken, Mexican Habanero sauce, cheese, tomato & onion</Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4}>
            <Card>
              <Card.Img variant="top" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K291.jpg?ver=71.85" />
              <Card.Body>
                <Card.Title>Longer Chicken Burger</Card.Title>
                <Card.Text>The really long chicken burger with boneless strip, onion and dynamite </Card.Text>
                <Button variant="danger" onClick={() => navigate("/forms")}>Order Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App

