

// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// // import './flog.css';
// import "./form.css";
// // import { useNavigate } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from "react-router-dom";
// const Signup = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [errors, setErrors] = useState({}); // ✅ bring back errors state
//   const navigate = useNavigate();

//   const validate = () => {
//     const navigate = useNavigate();
//     const newErrors = {};

//     if (!name.trim()) newErrors.name = 'Name is required.';
//     if (!email.trim()) newErrors.email = 'Email is required.';
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
//       newErrors.email = 'Please enter a valid email address.';

//     if (!password) newErrors.password = 'Password is required.';

//     if (!phone.trim()) newErrors.phone = 'Phone number is required.';
//     else if (!/^\d{10}$/.test(phone))
//       newErrors.phone = 'Phone number must be exactly 10 digits.';

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validate();
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors); // ✅ update errors
//       return;
//     }

//     const newUser = { Name: name, Email: email, Password: password, Phone: phone };
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     if (users.some(u => u.Email === email)) {
//       alert("User already registered, please login!");
//       navigate('/Fform');
//       return;
//     }

//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));
//     alert("Registered successfully, please login.");
//     navigate('/Fform');
//   };

//   return (
//     <div
//       className="d-flex justify-content-center align-items-center vh-100 hi"
     
//     ><div className='p-4 shadow rounded text-center  hello'>
//       <h1 style={{ color: 'blue', fontFamily: 'cursive', marginTop: 0 }}>SIGN UP</h1>
//       <Form
//         noValidate
//         onSubmit={handleSubmit}
//         style={{
//           alignItems: 'center',
//           justifySelf: 'center',
//           display: 'flex',
//           flexDirection: 'column',
//         }}
//       >
//         <Form.Group className="mb-3 w-85 p-3">
//           <Form.Control
//             name="name"
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             isInvalid={!!errors.name}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.name}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3 w-85 p-3">
//           <Form.Control
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             isInvalid={!!errors.email}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.email}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-3 w-85 p-3">
//           <Form.Control
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             isInvalid={!!errors.password}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.password}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <Form.Group className="mb-2 w-85 p-3">
//           <Form.Control
//             name="phone"
//             type="text"
//             placeholder="Phone Number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             isInvalid={!!errors.phone}
//             required
//           />
//           <Form.Control.Feedback type="invalid">
//             {errors.phone}
//           </Form.Control.Feedback>
//         </Form.Group>

//         <p>
//           Already have an account? <a href="/">Login</a>
//         </p>
//         <Button variant="info" type="submit" onClick={() => navigate("/")}>
//           Sign Up
//         </Button>
//       </Form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./form.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // ✅ validation function
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = 'Please enter a valid email address.';

    if (!password) newErrors.password = 'Password is required.';
    else if (password.length < 6)
      newErrors.password = 'Password must be at least 6 characters long.';

    if (!phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(phone))
      newErrors.phone = 'Phone number must be exactly 10 digits.';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); 
      return;
    }

    const newUser = { Name: name, Email: email, Password: password, Phone: phone };
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(u => u.Email === email)) {
      alert("User already registered, please login!");
      navigate('/Fform'); // go to login
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registered successfully, please login.");
    navigate('/Fform');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 hi">
      <div className='p-4 shadow rounded text-center hello'>
        <h1 style={{ color: 'blue', fontFamily: 'cursive', marginTop: 0 }}>SIGN UP</h1>

        <Form noValidate onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <Form.Group className="mb-3 w-85 p-3">
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 w-85 p-3">
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 w-85 p-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2 w-85 p-3">
            <Form.Control
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              isInvalid={!!errors.phone}
            />
            <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
          </Form.Group>

          <p>
            Already have an account? <a href="/">Login</a>
          </p>

          {/* ✅ removed onClick navigate here */}
          <Button variant="info" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
