import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './contact.css'
const App = () => {
    const navigate = useNavigate();
  return (
    <div className='con'>
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

