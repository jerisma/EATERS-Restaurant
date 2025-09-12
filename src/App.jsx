
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Signup from "./Fform";         
import EditFormComponent from "./edit";
import Login from "./flog";           
import Home from "./fhome";           
import Locat from "./flocatio";           
import TaliwinWeb from "./TaliwinWeb";  
import CreateForm from "./forms";      
import Get from "./getss";            
import About from "./about";
import Our from "./ourstory";
// import Press from "./press";
import Deal from "./deal";
import Burger from "./burger";
import Snack from "./Snak";
import Rice from "./rice";
import Order from "./order";
import Forms from './forms'
import Bev from './beva'
import Menu from './menu'
// import Menu from './menu'
import Cont from './contact'
const App = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/flog" element={<Login />} />
        <Route path="/Fform" element={<Signup />} /> 
        <Route path="/fhome" element={<Home />} /> 
        <Route path="/flocatio" element={<Locat />} /> 

        <Route path="/about" element={<About />} /> 
        <Route path="/ourstory" element={<Our />} /> 
        {/* <Route path="/press" element={<Press />} />  */}
        <Route path="/deal" element={<Deal />} /> 
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/contact" element={<Cont />} /> 
        <Route path="/contact" element={<Home/>} /> 

        
        <Route path="/burger" element={<Burger />} /> 
        <Route path="/snak" element={<Snack />} /> 
        <Route path="/rice" element={<Rice />} /> 
        <Route path="/order" element={<Order />} /> 
        <Route path="/beva" element={<Bev/>} /> 

        <Route path="/forms" element={<Forms/>} /> 
        <Route path="/getss" element={<Get/>} /> 
        <Route path="/list" element={<Get/>} /> 
        <Route path="/create" element={<CreateForm />} />
        <Route path="/edit/:id" element={<EditFormComponent />} />

     
        <Route path="/taliwin" element={<TaliwinWeb />} /> 
      </Routes>
    </Router>
  );
};

export default App;
