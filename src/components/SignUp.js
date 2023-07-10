import React, { useState } from 'react';
import { Link} from "react-router-dom";
import axios from 'axios';

function SignUp() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(password !== rePassword){
        setError("Passwords don't match!");
        return;
    }

    try{

        const response = await axios.post('http://localhost:3001/SignUp', {
          email,
          password,
        });

        if(response.status === 200){
            setSuccess('Register is successful. You can login now.');
            setEmail('');
            setPassword('');
            setRePassword('');
            setError('');

          

            const user = [document.getElementById("email").value , document.getElementById("password").value];
  
            const rePassword = document.getElementById("rePassword").value;

            const text = document.getElementById("text");

            // const mailData = response.data.email;
            // const passData = response.data.password;

            // const userData = [mailData, passData];

            if(user[1] == rePassword ){

              text.innerHTML = "Account Created!";
              text.style.color = "#57e257";
              sessionStorage.setItem("user" , user);
              window.location="/";
              // sessionStorage.setItem("user", userData);

            }
            else{
              text.style.color = "#540404";
            }


            
        }else{
            setError('Error. We are sorry. 1');
        }


    }catch (err){
        setError('Error. We are sorry');
    }
    
}


  const textStyle = {

      fontFamily: "Poppins",
      fontStyle: "italic",
      fontSize: "18px",
      fontWeight: "00"
  };

  const submitStyle = {
      fontFamily: "Poppins",
      fontStyle: "italic",
      width: "100%"
  }


return (
<>
  <div className="container-fluid backgroundImage">
  <div className="col-4 formStyle"> 
  
    <form onSubmit={handleSubmit}>
      <div className="row">
      <div className="col-12">
      <div className="mb-3 ">
        <label htmlFor="email" 
        className="form-label d-flex fw-bold" 
        style={textStyle}>
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          minLength={8}
          value={email}
          onChange= {(e) => setEmail(e.target.value)}
          required
        />
        <div id="emailHelp" style={textStyle} className="text-center text-lg-start">
          We'll never share your email with anyone else.
        </div>
      </div>
      </div>
      </div>
      <div className="mb-3">
      <div className="row">
      <div className="col-12">
        <label htmlFor="password" className="form-label d-flex fw-bold" style={textStyle}>
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange= {(e) => setPassword(e.target.value)}
          required
        />
      </div>
      </div>
      </div>
      <div className="mb-3">
      <div className="row">
      <div className="col-12">
        <label htmlFor="rePassword" className="form-label d-flex fw-bold" style={textStyle}>
          Re-enter your password
        </label>
        <input
          type="password"
          className="form-control"
          id="rePassword"
          value={rePassword}
          onChange= {(e) => setRePassword(e.target.value)}
          required
        />
      </div>
      </div>
      </div>
      <div id="signInExp" style={textStyle} className="mb-3 d-flex">
        Please <Link to="/" style={{textDecoration: "none", color: "#540404"}} className="mx-1 fw-bold"> click </Link> to enter your account.
      </div>
      <button type="submit" className="btn btn-dark p-1" style={submitStyle} >
        Submit
      </button>
      <div className="row">
      <div className="col-12 text-start"> 
      <p id="text" style={{marginTop: '20px' , fontWeight: 'bold', fontSize: '17px'}} > </p>
      </div>
      </div>



    </form>
        {error && <p style={{color: 'red'}}> {error} </p>}
        {success && <p style={{color: 'green'}}> {success} </p>}

            
      <div className="row">
      <div className="col-6">

      </div>
      </div>
      <div className="row">
      <div className="col-12 text-start"> 
      <p id="text" style={{marginTop: '20px' , fontWeight: 'bold', fontSize: '17px'}} > </p>
      </div>
      </div>

  </div>
  </div>
  </>
);
}

export default SignUp;
