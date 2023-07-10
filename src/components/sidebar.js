import { Link, Navigate } from "react-router-dom"; 
import React, {useState, useEffect} from 'react';
import { BsPerson } from "react-icons/bs";

const textStyle={
    fontFamily: "Poppins",
    fontStyle: "italic",
    fontSize: "20px",
    display: "flex"
}

const dropStyle={
  fontSize: "15px",
  fontStyle: "italic",
  fontFamily: "Poppins"
}
const dropStyle2={
  fontSize: "15px",
  fontStyle: "italic",
  fontFamily: "Poppins",
  textDecoration: "none",
  color: "white",
  listStyleType: "square"
}

// const sidebar = {
//   position: "fixed"
// }


function logOut(){

  sessionStorage.setItem("isLogin" , false);
  sessionStorage.setItem("user","");
  sessionStorage.setItem("personalInfo","");
  sessionStorage.setItem("educationInfo","");
  sessionStorage.setItem("contactInfo","");
  sessionStorage.setItem("documentInfo", "");
  sessionStorage.setItem("isLogin" , 0);
  sessionStorage.setItem("user_id" , "");
  
  window.location = "/"
  
}


function Sidebar(){


  const [ username, setUsername] = useState("");
  const [ isLogin, setIsLogin] = useState(false);
  
  useEffect(() => {
          
    const loginControl = sessionStorage.getItem("isLogin");
    const userNameControl = sessionStorage.getItem("user");
  
    if( loginControl == "true" && userNameControl !== ""){
        setIsLogin(true);
        let userInfo = userNameControl.split(","); 
        let formMail = userInfo[0].split("@");
        setUsername(formMail[0])
  
    }else{
        setIsLogin(false);
    }
   
  }, []);
    return(
        <> 
        <div className="Sidebar"> 
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ height: "100vh"}}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <img style={{width: "200px"}} src="https://www.khas.edu.tr/wp-content/uploads/2022/06/khas-logo-test.png"/>
    </a>
    <hr/>
    <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item" style={textStyle}>
        <Link to="/about" className="nav-link text-white" aria-current="page" >
          About 
        </Link>
      </li>
      <li className="mb-1">
        <button className="btn btn-toggle align-items-center rounded text-white border-1 border-white" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true" style={textStyle}>
          Application Form 
        </button>
        <div className="collapse show" id="home-collapse" >
          <ul >
            <li><Link to="form/personalinfo" className="d-flex " style={dropStyle2}>Personal Information</Link></li>
            <li><Link to="form/educationinfo" className="d-flex " style={dropStyle2}>Education Information</Link></li>
            <li><Link to="form/contactinfo" className="d-flex" style={dropStyle2}>Contact Information</Link></li>
            <li><Link to="form/document" className="d-flex" style={dropStyle2}>Document Information</Link></li>
          </ul>
        </div>
      </li>
      <li style={textStyle}>
        <Link to="/contact" className="nav-link text-white">
          Contact
        </Link>
      </li>
      <li style={textStyle}>
        <Link to="/faq" className="nav-link text-white">
          F.A.Q
        </Link>
      </li>
    </ul>
    <hr/>
    <div className="dropdown">
      <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <BsPerson className="m-2"/>
        <strong> {username} </strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        
        <li><Link to="/profile" className="dropdown-item" style={dropStyle}  >Profile</Link></li>
        <li><hr className="dropdown-divider"/></li>
        <li><Link className="dropdown-item" style={dropStyle} onClick = {() => logOut()}>Sign out</Link></li>
      </ul>
    </div>
  </div>
        </div>
        </>
    )


}

export default Sidebar;






