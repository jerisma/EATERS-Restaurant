
import axios from "axios";
import { Button, Modal, Card, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import Video from "./assets/video.mp4";
import "./getss.css"; // for video styling

const App = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const [delID, setDelID] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setDelID(id);
    setShow(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3009/posts");
      setValue(response?.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteFn = () => {
    axios
      .delete(`http://localhost:3009/posts/${delID}`)
      .then(() => {
        fetchData();
        handleClose();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="apps">
      <div className="content-overlay">
        <Container className="mt-4">
          {loading ? (
            <p className="text-center mt-4">Loading...</p>
          ) : (
            <Row xs={1} md={2} lg={3} className="g-4">
              {value.map((kk) => (
                <Col key={kk.id}>
                  <Card className="shadow-sm border-0 h-100">
                    <Card.Body>
                      <Card.Title>{kk.Name}</Card.Title>
                      <Card.Text>
                        <strong>📞 Phone:</strong> {kk.Phone} <br />
                        <strong>🏠 Address:</strong> {kk.Address} <br />
                        <strong>🛒 Order:</strong> {kk.Order}
                      </Card.Text>
                      <div className="d-flex justify-content-between">
                        <Button
                          variant="warning"
                          size="sm"
                          onClick={() => navigate(`/edit/${kk.id}`)}
                        >
                          ✏️ Edit
                        </Button>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleShow(kk.id)}
                        >
                          🗑️ Delete
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          )}

          <div className="text-center mt-4 d-flex justify-content-center gap-3">
            <Button onClick={() => navigate("/create")}>➕ Create</Button>
            <Button onClick={() => navigate("/fhome")}> ⬅Back to home</Button>
          </div>

          {/* Delete Confirmation Modal */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this?</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="danger" onClick={deleteFn}>
                🗑️ Delete
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
        
      </div>
       
    </div>
  );
};

export default App;
