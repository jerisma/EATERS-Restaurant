// import React, { useEffect, useState } from "react";
// import { Button, Card, Container, Row, Col } from "react-bootstrap";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);

//   // Fetch all orders
//   useEffect(() => {
//     fetch("http://localhost:3009/posts")
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.error("Error fetching orders:", err));
//   }, []);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this order?");
//     if (confirmDelete) {
//       await fetch(`http://localhost:3009/posts/${id}`, { method: "DELETE" });
//       setOrders(orders.filter((order) => order.id !== id));
//     }
//   };

//   return (
//     <Container className="py-5">
//       <h2 className="text-center text-danger mb-4">📋 Order List</h2>
//       <Row className="justify-content-center">
//         <Col md={8}>
//           {orders.length === 0 ? (
//             <p className="text-center text-muted">No orders placed yet.</p>
//           ) : (
//             orders.map((order) => (
//               <Card
//                 key={order.id}
//                 className="mb-3 shadow-sm rounded-4"
//                 style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
//               >
//                 <Card.Body>
//                   <Card.Title className="text-danger fw-bold">
//                     {order.name} 🍴
//                   </Card.Title>
//                   <Card.Text>
//                     <strong>📞 Phone:</strong> {order.phone} <br />
//                     <strong>🏠 Address:</strong> {order.address} <br />
//                     <strong>🍔 Order:</strong> {order.details}
//                   </Card.Text>
//                   <Button
//                     variant="outline-danger"
//                     onClick={() => handleDelete(order.id)}
//                   >
//                     🗑️ Delete
//                   </Button>
//                 </Card.Body>
//               </Card>
//             ))
//           )}
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default OrderList;
// import React, { useEffect, useState } from "react";
// import { Button, Card, Container, Row, Col } from "react-bootstrap";

// const OrderList = () => {
//   const [orders, setOrders] = useState([]);

//   // Fetch orders from backend
//   useEffect(() => {
//     fetch("http://localhost:3009/posts")
//       .then((res) => res.json())
//       .then((data) => setOrders(data))
//       .catch((err) => console.error("Error fetching orders:", err));
//   }, []);

//   const handleDelete = async (id) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this order?");
//     if (confirmDelete) {
//       await fetch(`http://localhost:3009/posts/${id}`, { method: "DELETE" });
//       setOrders(orders.filter((order) => order.id !== id));
//     }
//   };

//   return (
//     <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "40px 0" }}>
//       <Container>
//         <h2 className="text-center text-danger mb-4">📋 Order List</h2>
//         <Row className="justify-content-center">
//           <Col md={8}>
//             {orders.length === 0 ? (
//               <p className="text-center text-muted">No orders placed yet.</p>
//             ) : (
//               orders.map((order) => (
//                 <Card
//                   key={order.id}
//                   className="mb-3 shadow-sm rounded-4"
//                   style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
//                 >
//                   <Card.Body>
//                     <Card.Title className="text-danger fw-bold">
//                       {order.name} 🍴
//                     </Card.Title>
//                     <Card.Text>
//                       <strong>📞 Phone:</strong> {order.phone} <br />
//                       <strong>🏠 Address:</strong> {order.address} <br />
//                       <strong>🍔 Order:</strong> {order.details}
//                     </Card.Text>
//                     <div className="d-flex justify-content-end">
//                       <Button
//                         variant="outline-danger"
//                         size="sm"
//                         onClick={() => handleDelete(order.id)}
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

// export default OrderList;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Table, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [show, setShow] = useState(false);
  const [delID, setDelID] = useState(null);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3009/posts");
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShow = (id) => {
    setDelID(id);
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const deleteOrder = async () => {
    try {
      await axios.delete(`http://localhost:3009/posts/${delID}`);
      fetchOrders();
      handleClose();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h2 className="mb-4 text-danger">📋 Orders List</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Order Details</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.name}</td>
              <td>{order.phone}</td>
              <td>{order.address}</td>
              <td>{order.details}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleShow(order.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this order?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteOrder}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderList;
