// import React, { useState } from "react";
//  import Button from "react-bootstrap/Button"; 
//  import Form from "react-bootstrap/Form";
//   import { useNavigate } from "react-router-dom"; 
  
//   import axios from "axios";
//    import './flog.css'
//    const Login = () => { const [email, setEmail] = useState("");
//      const [password, setPassword] = useState(""); 
//      const [phone, setPhone] = useState("");
//       const navigate = useNavigate(); 
//       const handleSubmit = async (e) => { e.preventDefault(); 
//         try { const res = await axios.get("http://localhost:3006/posts"); 
//           const users = res.data; 
//           const foundUser = users.find( (u) => u.Email === email && u.Password === password && u.Phone === phone ); 
//           if (foundUser) { alert("✅ Login successful");
//              navigate("/fhome"); }
//            else { alert("❌ Invalid details, Please Signup");
//              navigate("/Fform"); } } catch (err) { console.error(err); } };
//               return ( 
//               <div className="d-flex justify-content-center align-items-center vh-100 back">
//                  <Form onSubmit={handleSubmit} className="p-4 shadow rounded text-center w-50 glass-box text-white"> 
//                   <h2 className="mb-3">Login</h2>
//                    <Form.Group className="mb-3"
//                    > <Form.Label>Email address</Form.Label>
//                     <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} /> 
//                       </Form.Group>
//                        <Form.Group className="mb-3">
                        
//                          <Form.Label>Password</Form.Label> 
//                          <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                            </Form.Group> <Form.Group className="mb-3"> 
//                             <Form.Label>Phone number</Form.Label> 
//                             <Form.Control type="tel" placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
//                                </Form.Group>
//                                 <Button variant="primary" type="submit" className="w-50 mb-3"> Login </Button> 
//                                 <p> Don’t have an account?{" "} 
//                                   <span className="text-primary fw-bold" style={{ cursor: "pointer" }} onClick={() => navigate("/Fform")} > Sign Up </span> </p> 
//                                 </Form>
//                                  </div>
//                                   ); 
//                                 };
//                                  export default Login; 

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
      <div className="glass-box p-4 rounded shadow text-white text-center">
        <h1 style={{ color: "brown" }}>LOGIN</h1>

        {error && (
          <div className="text-danger mb-3 fw-bold">{error}</div>
        )}

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
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => navigate("/Fform")}
            >
              Sign up
            </span>
          </p>

            <Button variant="primary" type="submit" className="w-100">
      Submit
        </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
