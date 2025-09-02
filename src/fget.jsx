import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Modal } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom'
const App = () => {
  
  const[value,setValue]=useState([])
  const navigate = useNavigate()

  const [show, setShow] = useState(false);
  const [delID,setDelID] = useState(null)
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setDelID(id)
    setShow(true)
  };

  const fetchData=async ()=>{
    try {
      const response = await axios.get("http://localhost:3009/posts");
      setValue(response?.data);
    } catch (error) {
      console.error(error);
    }
}

const deleteFn = () =>{
  axios.delete(`http://localhost:3009/posts/${delID}`).then((res) => {
    fetchData()
    handleClose()
 }).catch((err) => {
     console.log(err)
 })
}

const createFn = () =>{
  navigate('/create')
}

  useEffect(()=>{
    fetchData()
  },[])

  return (

    <div>
      <Table striped bordered hover style={{ marginTop: "50px" }}>
          <thead>
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Qualification</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
      
          {value.map((kk) => (
              <tr key={kk.id}>
                <td>{kk.id} </td>
                <td>{kk.Name} </td>
                <td>{kk.Email}</td>
                <td>{kk.Password}</td>
                <td>{kk.Qualification}</td>
                <td>{kk.Phone}</td>
                <td>
          <button onClick={()=>navigate(`/edit/${kk.id}`)}>Edit</button>
          <button onClick={()=>handleShow(kk.id)}>Delete</button>
          </td>
              </tr>
            ))}
          </tbody>
        </Table>
     
        
        <Button onClick={()=>createFn()}>Create</Button>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          Are you sure want delete this?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={deleteFn}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default App