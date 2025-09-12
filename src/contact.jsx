import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
// import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './contact.css'
const App = () => {
    const navigate = useNavigate();
  return (
    <div className='con'>
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
      
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4 ">CONTACT US</h1>
          <Form>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label className='text-xl'>First name</Form.Label>
              <Form.Control type="text" placeholder="Your first name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label className='text-xl'>Last name</Form.Label>
              <Form.Control type="text" placeholder="Your last name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label className='text-xl'>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="question">
              <Form.Label className='text-xl'>
                Question for us <br />
                What would you like to know?
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <div className="text-center">
              <Button variant="primary" type="submit" onClick={() => navigate("/fhome")}>
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
     <h3 className="text-center mb-4 mt-4 " style={{color:"burlywood"}}>We'd love to hear from you.</h3>
     <div className='flex justify-center mt-3'>
      <Button variant="outline-dark">  📞call us 087-4444-5566</Button>

      </div>
      
     <h3 className="text-center mb-4 mt-4" style={{ color: "firebrick" }}>
  Connect with us
</h3>

<div className="flex justify-center gap-4">
  <a href="https://wa.me/your-number" >
    <img
      src="https://thumbnail.imgbin.com/19/21/14/whatsapp-whatsapp-app-logo-in-green-circle-AZU1A2SU_t.jpg"
      className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
      alt="WhatsApp"
    />
  </a>

  <a href="https://facebook.com/yourpage">
    <img
      src="https://png.pngtree.com/element_our/sm/20180509/sm_5af2960e13ef6.jpg"
      className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
      alt="Facebook"
    />
  </a>

  <a href="https://instagram.com/yourpage" >
    <img
      src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740&q=80"
      className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
      alt="Instagram"
    />
  </a>
</div>

      </div>
  );
};

export default App;

