import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Img5 from "./assets/kkk.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      
      

      {/* Card Section */}
      <Container className="mt-4">
        <Row className="g-4">
          {[
            {
              title: "2 pc Hot & Crispy Chicken",
              text: "Get 2 piece Hot & Crispy Chicken",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5qmeaK5RUst2BWzmVHg9QKVS9657ywWcQpg&s"
            },
            {
              title: "Medium Fries",
              text: "Medium size Fries",
              img: "https://img.freepik.com/premium-photo/fried-perfection-golden-french-fries-best-fast-food-french-fries-image-photography_1020697-129641.jpg"
            },
            {
              title: "Peri Peri 3pc Chicken Strips",
              text: "3 Pieces Spicy Peri Peri chicken boneless strips",
              img: "https://images.ctfassets.net/wtodlh47qxpt/2FvZ9vOtAnsmsxrHD2NX9C/5834f918ed8f4b3a0ea470deaab87443/D-K684-prod?h=600&w=800&fm=webp&fit=fill"
            },
            {
              title: "Korean Tangy Chicken Roll",
              text: "Delicious new roll featuring tangy Korean kimchi, vegetables and crunchy chicken strips",
              img: "https://img.freepik.com/premium-photo/gastronomic-picture-2-michelin-stars-spicy-korean-fried-chicken-wrap_992397-22167.jpg"
            },
            {
              title: "Chicken Longer Burger & 2 Strips Combo",
              text: "Longgg burger with crunchy chicken, onions & a punchy sauce , served with 2 peri peri chicken strips",
              img: "https://images.ctfassets.net/wtodlh47qxpt/2umhTfvWOV5Mg0dl80bKNS/2c0ab359a3f99363d47f38eddbab42c3/D-PR00002348-prod?h=600&w=800&fm=webp&fit=fill"
            },
            {
              title: "Tandoori Chicken Roll & Zinger Meal",
              text: "Tandoori Chicken Roll & Zinger",
              img: "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002684.jpg?ver=71.86"
            }
          ].map((item, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <Card className="h-100 d-flex flex-column">
                <Card.Img
                  variant="top"
                  src={item.img}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="flex-grow-1">{item.text}</Card.Text>
                  <Button variant="danger" className="mt-auto w-30" onClick={() => navigate("/forms")}>
                    Order Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;





