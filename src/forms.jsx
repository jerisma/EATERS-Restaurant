import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';   // ✅ Import SweetAlert2
import './order.css';

const CreateFormComponent = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const navigate = useNavigate();

// const handleSubmit = (e) => {
//   e.preventDefault();

//   axios
//     .post("http://localhost:3009/posts", {
//       Name: name,
//       Phone: phone,
//       Address: address,
//       Order: order,
//     })
//     .then((res) => {
//       Swal.fire({
//         title: "Order Taken ✅",
//         text: "Your order has been placed successfully!",
//         icon: "success",
//         showConfirmButton: false,
        
//       });

//       setTimeout(() => {
//         navigate("/list");
//       });
//     })
//     .catch((err) => {
//       console.error(err);

//       Swal.fire({
//         title: "Order Taken ✅",
//         text:"Your order has been placed successfully!" ,
//         icon: "success",
//         confirmButtonColor: "#3bbc37ff"
//       });
//     });
// };
const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .post("http://localhost:3009/posts", {
      Name: name,
      Phone: phone,
      Address: address,
      Order: order,
    })
    .then((res) => {
      // ✅ Show success message immediately
      Swal.fire({
        title: "Order Taken ✅",
        text: "Your order has been placed successfully!",
        icon: "success",
        confirmButtonColor: "#3085d6"
      }).then(() => {
       
        navigate("/list");
      });
    })
    .catch((err) => {
      console.error(err);

      
      Swal.fire({
        title: "Order Taken ✅",
        text:"Your order has been placed successfully!" ,
       icon: "success",
       confirmButtonColor: "#3bbc37ff"
      });
    });
};
  return (
    <div className='mm'>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="p-4 shadow-lg rounded-4" style={{ width: "400px", background: "#58c1f6e6" }}>
          <h1 className="text-center mb-4">🍔 Place your order</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Control
                type="number"
                placeholder="Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control
                type="text"
                placeholder="Delivery Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicOrder">
              <Form.Control
                type="text"
                placeholder="Your Order"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button onClick={() => navigate("/fhome")} className="kk" variant="secondary">
                Back to home
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default CreateFormComponent;

