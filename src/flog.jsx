import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./flog.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.Email === email && u.Password === password
    );

    if (foundUser) {
      alert("Login successful ✅");
      navigate("/fhome");
    } else {
      setError("Invalid email or password. Please try again or sign up.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 back">
      <div className="glass-box p-4 rounded-4 shadow-lg text-white text-center w-100">
        <h1 className="login-title mb-4">LOGIN</h1>

        {error && <div className="text-danger mb-3 fw-bold">{error}</div>}

        <Form onSubmit={handleSubmit}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInputCustom">Email address</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingPasswordCustom"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPasswordCustom">Password</label>
          </Form.Floating>

          <p className="mt-3">
            Don’t have an account?{" "}
            <span
              style={{
                color: "#0d6efd",
                textDecoration: "underline",
                cursor: "pointer",
                fontWeight: "600",
              }}
              onClick={() => navigate("/Fform")}
            >
              Sign up
            </span>
          </p>

          <Button variant="primary" type="submit" className="w-100 fw-bold">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;

