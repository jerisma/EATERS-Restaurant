import React, { useState } from "react";
import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
import bgImage from "./assets/food.jpg"; 

const FoodOrder = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    details: "",
  });
  const [editIndex, setEditIndex] = useState(null); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
  
      const updatedOrders = [...orders];
      updatedOrders[editIndex] = formData;
      setOrders(updatedOrders);
      setEditIndex(null);
    } else {
      
      setOrders([formData, ...orders]);
    }


    setFormData({ name: "", phone: "", address: "", details: "" });
  };

  const handleEdit = (index) => {
    setFormData(orders[index]); 
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (confirmDelete) {
      const updatedOrders = orders.filter((_, i) => i !== index);
      setOrders(updatedOrders);
      
      if (editIndex === index) {
        setFormData({ name: "", phone: "", address: "", details: "" });
        setEditIndex(null);
      }
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            {/* Order Form */}
            <Card
              className="shadow-lg p-4 mb-5 rounded-4"
              style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
            >
              <h2 className="text-center mb-4 text-danger">
                🍔 {editIndex !== null ? "Edit Order" : "Place Your Order"}
              </h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="rounded-3"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="rounded-3"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Delivery Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="rounded-3"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Your Order Details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="rounded-3"
                  />
                </Form.Group>
                <div className="d-grid">
                  <Button
                    variant={editIndex !== null ? "warning" : "success"}
                    size="lg"
                    type="submit"
                    className="rounded-3 "
                  >
                    {editIndex !== null ? "Update Order" : "Submit Order"}
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8}>
            <h3 className="text-center mb-4 text-white fw-bold"> Order List</h3>
            {orders.length === 0 ? (
              <p className="text-center text-light">No orders placed yet.</p>
            ) : (
              orders.map((order, index) => (
                <Card
                  key={index}
                  className="mb-3 shadow-sm rounded-4"
                  style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                >
                  <Card.Body>
                    <Card.Title className="text-danger fw-bold">
                      {order.name}
                    </Card.Title>
                    <Card.Text>
                      <strong> Phone:</strong> {order.phone} <br />
                      <strong> Address:</strong> {order.address} <br />
                      <strong> Order:</strong> {order.details}
                    </Card.Text>
                    <div className="d-flex gap-2">
                      <Button
                        variant="outline-warning"
                        // size="sm"
                        onClick={() => handleEdit(index)} className="w-25"
                      >
                         Edit
                      </Button>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FoodOrder;
// import React, { useState, useEffect } from "react";
// import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
// import bgImage from "./assets/food.jpg";

// const FoodOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     details: "",
//   });
//   const [editIndex, setEditIndex] = useState(null);

//   // Fetch existing orders from backend
//   useEffect(() => {
//     fetch("http://localhost:3009/posts")
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.error("Error fetching orders:", err));
//   }, []);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editIndex !== null) {
//       // Update order
//       const updatedOrder = { ...orders[editIndex], ...formData };
//       await fetch(`http://localhost:3009/posts/${orders[editIndex].id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updatedOrder),
//       });
//       const updatedOrders = [...orders];
//       updatedOrders[editIndex] = updatedOrder;
//       setOrders(updatedOrders);
//       setEditIndex(null);
//     } else {
//       // Create new order
//       const response = await fetch("http://localhost:3009/posts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const newOrder = await response.json();
//       setOrders([newOrder, ...orders]);
//     }

//     setFormData({ name: "", phone: "", address: "", details: "" });
//   };

//   const handleEdit = (index) => {
//     setFormData(orders[index]);
//     setEditIndex(index);
//   };

//   const handleDelete = async (index) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this order?");
//     if (confirmDelete) {
//       await fetch(`http://localhost:3009/posts/${orders[index].id}`, {
//         method: "DELETE",
//       });
//       const updatedOrders = orders.filter((_, i) => i !== index);
//       setOrders(updatedOrders);
//       if (editIndex === index) {
//         setFormData({ name: "", phone: "", address: "", details: "" });
//         setEditIndex(null);
//       }
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         padding: "40px 0",
//       }}
//     >
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <Card
//               className="shadow-lg p-4 mb-5 rounded-4"
//               style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
//             >
//               <h2 className="text-center mb-4 text-danger">
//                 🍔 {editIndex !== null ? "Edit Order" : "Place Your Order"}
//               </h2>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Your Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Phone Number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Delivery Address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     as="textarea"
//                     placeholder="Your Order Details"
//                     name="details"
//                     value={formData.details}
//                     onChange={handleChange}
//                     required
//                     rows={3}
//                   />
//                 </Form.Group>
//                 <div className="d-grid">
//                   <Button
//                     variant={editIndex !== null ? "warning" : "success"}
//                     size="lg"
//                     type="submit"
//                   >
//                     {editIndex !== null ? "Update Order" : "Submit Order"}
//                   </Button>
//                 </div>
//               </Form>
//             </Card>
//           </Col>
//         </Row>

//         <Row className="justify-content-center">
//           <Col md={8}>
//             <h3 className="text-center mb-4 text-white fw-bold">📋 Order List</h3>
//             {orders.length === 0 ? (
//               <p className="text-center text-light">No orders placed yet.</p>
//             ) : (
//               orders.map((order, index) => (
//                 <Card
//                   key={order.id}
//                   className="mb-3 shadow-sm rounded-4"
//                   style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
//                 >
//                   <Card.Body>
//                     <Card.Title className="text-danger fw-bold">
//                       {order.name}
//                     </Card.Title>
//                     <Card.Text>
//                       <strong>📞 Phone:</strong> {order.phone} <br />
//                       <strong>🏠 Address:</strong> {order.address} <br />
//                       <strong>🍴 Order:</strong> {order.details}
//                     </Card.Text>
//                     <div className="d-flex gap-2">
//                       <Button
//                         variant="outline-warning"
//                         onClick={() => handleEdit(index)}
//                       >
//                         ✏️ Edit
//                       </Button>
//                       <Button
//                         variant="outline-danger"
//                         onClick={() => handleDelete(index)}
//                       >
//                         🗑️ Delete
//                       </Button>
//                     </div>
//                   </Card.Body>
//                 </Card>
//               ))
//             )}
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default FoodOrder;
// import React, { useState } from "react";
// import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
// import bgImage from "./assets/food.jpg";

// const FoodOrder = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     details: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await fetch("http://localhost:3009/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     alert("✅ Order placed successfully!");
//     setFormData({ name: "", phone: "", address: "", details: "" });
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         padding: "40px 0",
//       }}
//     >
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <Card
//               className="shadow-lg p-4 mb-5 rounded-4"
//               style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
//             >
//               <h2 className="text-center mb-4 text-danger">🍕 Place Your Order</h2>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Your Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Phone Number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Delivery Address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     as="textarea"
//                     placeholder="Your Order Details"
//                     name="details"
//                     value={formData.details}
//                     onChange={handleChange}
//                     required
//                     rows={3}
//                   />
//                 </Form.Group>
//                 <div className="d-grid">
//                   <Button variant="success" size="lg" type="submit">
//                     Submit Order
//                   </Button>
//                 </div>
//               </Form>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default FoodOrder;
// import React, { useState } from "react";
// import { Button, Form, Card, Container, Row, Col } from "react-bootstrap";
// import bgImage from "./assets/food.jpg";

// const FoodOrder = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     address: "",
//     details: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await fetch("http://localhost:3009/posts", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     });

//     alert("✅ Order placed successfully!");
//     setFormData({ name: "", phone: "", address: "", details: "" });
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: `url(${bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         minHeight: "100vh",
//         padding: "40px 0",
//       }}
//     >
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6}>
//             <Card
//               className="shadow-lg p-4 mb-5 rounded-4"
//               style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
//             >
//               <h2 className="text-center mb-4 text-danger">
//                 🍕 Place Your Order
//               </h2>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Your Name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Phone Number"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     type="text"
//                     placeholder="Delivery Address"
//                     name="address"
//                     value={formData.address}
//                     onChange={handleChange}
//                     required
//                   />
//                 </Form.Group>
//                 <Form.Group className="mb-3">
//                   <Form.Control
//                     as="textarea"
//                     placeholder="Your Order Details"
//                     name="details"
//                     value={formData.details}
//                     onChange={handleChange}
//                     required
//                     rows={3}
//                   />
//                 </Form.Group>
//                 <div className="d-grid">
//                   <Button variant="success" size="lg" type="submit">
//                     🚀 Submit Order
//                   </Button>
//                 </div>
//               </Form>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default FoodOrder;

