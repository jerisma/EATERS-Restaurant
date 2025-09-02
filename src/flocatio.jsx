import React from "react";
import './floc.css'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Img5 from "./assets/kkk.png";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
const MapEmbed = () => {
  return (
    <>
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
            <Navbar.Brand href="/forms">Online Orders</Navbar.Brand>
                        <Nav.Link href="/contact">Contact us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    <div className="flex flex-col items-center p-4 hii">
       
      <h1 className="text-3xl font-bold  mb-6">Our Location</h1>
      <div className="relative w-full max-w-4xl aspect-video border-2 border-black rounded-xl overflow-hidden mt-10 ">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15791.820426024362!2d77.20933304416154!3d8.307260367647284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b045516f27e1797%3A0x9eaf4bffb1fa19c1!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1755786603832!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </>
  );
};

export default MapEmbed;


