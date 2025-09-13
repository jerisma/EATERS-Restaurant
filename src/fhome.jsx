
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";


// import Img1 from "./assets/C.jpg";
import Img1 from "./assets/C.jpg";

import Img2 from "./assets/A.jpg";
import Img3 from "./assets/D.png";
import Imgm from "./assets/deal.svg";
import Img4 from "./assets/kk.png";
import Img5 from "./assets/kkk.png";
import Img6 from "./assets/kkkk.png";
// import Cat from './assets/cat.jpg'
import Loc from './assets/loc.jpg'
import About from './assets/about.jpg'

// import RamenDiningIcon from '@mui/icons-material/RamenDining';
const TaliwinWeb = () => {
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
            <Navbar.Brand onClick={() => navigate("/forms")}style={{cursor:"pointer"}}>Online Orders</Navbar.Brand>
            <Nav.Link  onClick={() => navigate("/contact")}>Contact us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      

      {/* Carousel Section */}
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="First slide"
            style={{ height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1
              className="text-danger font-bold"
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
                fontSize: "80px",
              }}
            >
              Eat Well. Do Good.
            </h1>
            <p style={{ fontSize: "30px" }}>
              Open daily on the UWS and Central Park!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Second slide"
            style={{ height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1
              className="text-danger font-bold"
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
                fontSize: "80px",
              }}
            >
              Eat Well. Do Good.
            </h1>
            <p style={{ fontSize: "30px" }}>
              Open daily on the UWS and Central Park!
            </p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Third slide"
            style={{ height: "700px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1
              className="text-danger font-bold"
              style={{
                textShadow: "2px 2px 6px rgba(0,0,0,0.5)",
                fontSize: "80px",
              }}
            >
              Eat Well. Do Good.
            </h1>
            <p style={{ fontSize: "30px" }}>
              Open daily on the UWS and Central Park!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

     
      <div className="grid grid-cols-2 gap-6 mt-10 px-6">
        <div className="relative">
          <img
            src={Img1}
            alt="Menu"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg">
            <h2 className="text-white text-3xl font-bold drop-shadow-lg mb-4">
              MENU
            </h2>
            <Button variant="success" onClick={() => navigate("/menu")}>View Menu</Button>
          </div>
        </div>

        <div className="relative">
          <img
            src={Imgm}
            alt="Special"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg">
            <h2 className="text-white text-3xl font-bold drop-shadow-lg mb-4">
              DEALS
            </h2>
            <Button variant="success" onClick={() => navigate("/deal")}>Our Deals</Button>
          </div>
        </div>
      </div>



<div className="grid grid-cols-2 gap-6 mt-10 px-6">
        <div className="relative">
          <img
            src={Loc}
            alt="Menu"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg">
            <h2 className="text-white text-3xl font-bold drop-shadow-lg mb-4">
              LOCATION
            </h2>
            <Button variant="success" onClick={() => navigate("/flocatio")}>View Location</Button>
          </div>
        </div>

        <div className="relative">
          <img
            src={About}
            alt="Special"
            className="w-full h-72 object-cover rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 rounded-lg">
            <h2 className="text-white text-3xl font-bold drop-shadow-lg mb-4">
              OUR STORY
            </h2>
            <Button variant="success" onClick={() => navigate("/about")}>Our Story</Button>
          </div>
        </div>
      </div>
   
      <Container className="mt-4">
        <Row>
          <Col xs={6} md={4}>
            <Image src={Img4} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={Img5} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={Img6} rounded />
          </Col>
        </Row>
      </Container>
<div className="bg-pink-300">
       <h3 className="text-center mb-4 mt-4" style={{ color: "firebrick" }}>
  Connect with us
</h3>

<div className="flex justify-center gap-4 ">
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

  <a href="https://www.instagram.com/" >
    <img
      src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-392.jpg?semt=ais_hybrid&w=740&q=80"
      className="w-10 h-10 rounded-full hover:scale-110 transition-transform"
      alt="Instagram"
    />
  </a>
</div>
</div>

      
    </div>
  );
};

export default TaliwinWeb;

