
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import { useNavigate, useParams } from 'react-router-dom';
// import './edit.css'
// const EditFormComponent = () => {
//   const { id } = useParams();

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [order, setOrder] = useState("");

//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:3009/posts/${id}`);
//       const data = response?.data;
//       setName(data?.Name || "");
//       setPhone(data?.Phone || "");
//       setAddress(data?.Address || "");
//       setOrder(data?.Order || "");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmitFn = (e) => {
//     e.preventDefault();
//     axios
//       .patch(`http://localhost:3009/posts/${id}`, {
//         Name: name,
//         Phone: phone,
//         Address: address,  
//         Order: order,
//       })
//       .then((res) => {
//         navigate('/list');
//         console.log(res?.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className='bacg'>
//     <Container className="d-flex justify-content-center align-items-center min-vh-100 ">
//       <Card className="p-4 shadow-lg rounded-4 hel" style={{ width: "400px" }}>
//         <h2 className="text-center mb-4">Edit Your Order</h2>
//         <Form onSubmit={handleSubmitFn}>
//           <Form.Group className="mb-3">
//             <Form.Control
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Control
//               type="number"
//               placeholder="Phone Number"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Control
//               type="text"
//               placeholder="Address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3">
//             <Form.Control
//               type="text"
//               placeholder="Order"
//               value={order}
//               onChange={(e) => setOrder(e.target.value)}
//             />
//           </Form.Group>

//           <div className="d-flex justify-content-between">
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//             <Button onClick={() => navigate('/list')} variant="secondary">
//               Back to List
//             </Button>
//           </div>
//         </Form>
//       </Card>
//     </Container>
//     </div>
//   );
// };

// export default EditFormComponent;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';   // ✅ Import SweetAlert2
import './edit.css';

const EditFormComponent = () => {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [order, setOrder] = useState("");

  const navigate = useNavigate();

  // ✅ Fetch existing data
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3009/posts/${id}`);
      const data = response?.data;
      setName(data?.Name || "");
      setPhone(data?.Phone || "");
      setAddress(data?.Address || "");
      setOrder(data?.Order || "");
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Handle submit with SweetAlert2 popup
  const handleSubmitFn = (e) => {
    e.preventDefault();
    axios
      .patch(`http://localhost:3009/posts/${id}`, {
        Name: name,
        Phone: phone,
        Address: address,
        Order: order,
      })
      .then((res) => {
        Swal.fire({
          title: "Updated!",
          text: "Your order has been updated successfully ✅",
          icon: "success",
          confirmButtonColor: "#0d6efd",
        }).then(() => {
          navigate('/list');
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "Failed to update order. Please try again.",
          icon: "error",
          confirmButtonColor: "#dc3545",
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bacg'>
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Card className="p-4 shadow-lg rounded-4 hel" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">Edit Your Order</h2>
          <Form onSubmit={handleSubmitFn}>
            
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Order"
                value={order}
                onChange={(e) => setOrder(e.target.value)}
                required
              />
            </Form.Group>

            <div className="d-flex justify-content-between">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button onClick={() => navigate('/list')} variant="secondary">
                Back to List
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default EditFormComponent;
