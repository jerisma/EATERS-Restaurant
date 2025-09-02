
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import BgImage from "./assets/reg.jpg";
import "./form.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // get old users
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // check duplicate
    const exists = users.find((u) => u.Email === email);
    if (exists) {
      alert("⚠️ User already registered, please login!");
      navigate("/flog");
      return;
    }

    // add new user
    const newUser = {
      Name: name,
      Email: email,
      Password: password,
      Qualification: qualification,
      Phone: phone,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Registered Successfully, Please Login");
    navigate("/flog");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Form
        onSubmit={handleSubmit}
        className="p-4 shadow rounded text-center glass-box text-white w-50"
      >
        <h1 className="mb-4">Sign Up</h1>

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
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          <Button variant="light" onClick={() => navigate("/flog")}>
            🔑 Login
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
