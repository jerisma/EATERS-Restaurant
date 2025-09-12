import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Img5 from "./assets/kkk.png";
import Img11 from "./assets/mm.jpg";
import Img12 from "./assets/lll.jpg";
import './about.css'
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
      

      {/* Hero Section */}
      <div className="image flex justify-center items-center h-[60vh] md:h-[70vh]">
        <p className="text-white text-5xl font-extrabold drop-shadow-lg mb-4 p-1">
          Our Story
        </p>
      </div>

      {/* Section 1 */}
      <div className="mt-10 px-4">
        <h1 className="text-center text-3xl md:text-4xl font-bold">How EATER Found Its Path</h1>
        <p className="text-center text-lg md:text-2xl mt-4">
          This is the story of how we went from migrating from kitchen to kitchen to feeding the city as The Eater. 
          What started as catering office lunches and private events around New York City quickly evolved into 
          something much bigger.
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-6 md:px-12">
        <div>
          <img 
            src={Img11}
            alt="Sample" 
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Humble Beginnings</h1>
          <p className="text-lg text-gray-700 text-center mb-4">
            In October 2019, The Migrant Kitchen was born. A long-dreamt-of catering business that focused on 
            providing meaningful opportunities for chefs to showcase their stories.
          </p>
          <p className="text-lg text-gray-700 text-center mb-4">
            As we battled the global pandemic, we expanded from a standard catering operation to serving frontline 
            healthcare workers and opening brick and mortar restaurants.
          </p>
          <p className="text-lg text-gray-700 text-center">
            We continue to change the way we live and eat. Our operation has quickly grown into something much greater 
            and even more fulfilling.
          </p>
        </div>
      </div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 px-6 md:px-12 w-full">
  {/* Text Side */}
  <div className="flex flex-col justify-center p-6 bg-gray-100 rounded-lg shadow-lg order-2 md:order-1">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Growth</h1>
    <p className="text-lg text-gray-700 text-center mb-4">
      "This is exactly what New York City is all about. The different cultures
      represented on The Migrant Kitchen's menu is the future of food."
    </p>
  </div>

  {/* Image Side */}
  <div className="order-1 md:order-2">
    <img 
      src={Img12}
      alt="Sample" 
      className="w-full h-[250px] md:h-[300px] object-cover rounded-lg shadow-lg"
    />
  </div>
</div>

      
      
    </div>
  )
}

export default App

