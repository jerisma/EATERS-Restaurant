


import React, { useState } from "react";  
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './flog.css'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get("http://localhost:3008/posts");
      const users = res.data;

      const foundUser = users.find(
        (u) => u.Email === email && u.Password === password && u.Phone === phone
      );

      if (foundUser) {
        alert("✅ Login successful");
        navigate("/fhome");
      } else {
        alert("❌ Invalid details, Please Signup");
        navigate("/Fform");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 back">
      <Form onSubmit={handleSubmit} className="p-4 shadow rounded text-center w-50 glass-box  text-white">
        <h2 className="mb-3">Login</h2>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-50 mb-3">
          Login
        </Button>

        <p>
          Don’t have an account?{" "}
          <span
            className="text-primary fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/Fform")}
          >
            Sign Up
          </span>
        </p>
      </Form>
    </div>
  );
};

export default Login;

