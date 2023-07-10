import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {  Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./components/about";
import Form from "./components/form";
import Contact from "./components/contact";
import Faq from "./components/faq";
import Layout from "./components/layout";
import PersInfo from "./components/PersInfo";
import EduInfo from "./components/EduInfo";
import ContactInfo from "./components/ContactInfo";
import Home from "./components/home";
import ForgotPass from "./components/Forgotpassword";
import FormSuccess from "./components/formSuccess";
import Document from "./components/DocumentInfo";
import Profile from "./components/Profile";


function App() {
  return <div className="App"> 
     
    <BrowserRouter> 
    
        <Routes>
          
          <Route index element={<SignIn />}/>
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Forgotpassword" element={<ForgotPass />} />
          <Route path="/" element={<Layout/>} >      
            <Route path="about" element={<About/>}/>
            <Route path="home" element={<Home/>}/>

            <Route path="form" element={<Form/>}>
            
              <Route path="personalinfo" element={<PersInfo/>}/>
              <Route path="educationinfo" element={<EduInfo/>}/>
              <Route path="contactinfo" element={<ContactInfo/>}/>
              <Route path="document" element={<Document />}/>
              <Route path="formsuccess" element={<FormSuccess/>}/>
            </Route>
          
          <Route path="contact" element={<Contact/>}/>
          <Route path="faq" element={<Faq />} />
          <Route path="profile" element={<Profile/>}/>
        </Route>
        
        </Routes>
        
        </BrowserRouter>

  </div>
  
}

export default App;
//index