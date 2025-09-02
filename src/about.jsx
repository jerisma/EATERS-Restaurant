
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Img5 from "./assets/kkk.png";
import './about.css'
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
      
<div className="image flex justify-center items-center h-screen">
  <p className="text-white text-5xl font-extrabold drop-shadow-lg mb-4 p-1 me">
    Our Philosophy
  </p>
</div>
<div>
  <h1 className="text-center mee">Eat Well. Do Good.</h1>
  <p className="p-2 text-center text-2xl">Representing a blend of taste and technique from the Middle East to Latin America, our menu pays homage to the  <br /> culinary roots of our chefs and is rooted in the belief that food mirrors humanity: creative, collaborative...and a <br /> little nonconformist. </p>
  <p className="p-2 text-center text-2xl">Portions of every meal purchased go towards providing meals to New Yorkers in need. We serve the same restaurant <br /> quality food to those in need as we do to those who visit our store locations and we pride ourselves in preparing meals <br /> that are culturally appropriate for the community in which we are serving</p>
</div>

</div>

  )
}

export default App
