import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const TaliwinWeb = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/flocatio">Location</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Nav.Link as={Link} to="/Fform">Sign Up</Nav.Link>
              <Nav.Link as={Link} to="/list">Users List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>Welcome to Taliwin Web</h1>
        <p>Use the navigation bar to explore the site.</p>
      </div>
    </div>
  );
};

export default TaliwinWeb;
