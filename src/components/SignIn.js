import { Link, useNavigate} from "react-router-dom"; 
import React, {useState} from 'react';
import axios from "axios";

const forgotPass = {
  fontWeight: 'normal', 
  fontSize: '17px',
  color: 'white'
}


function SignIn() {

    const textStyle = {

        fontFamily: "Poppins",
        fontStyle: "italic",
        fontSize: "16px",
        fontWeight: "00"
    };

    const submitStyle = {
        fontFamily: "Poppins",
        fontStyle: "italic",
        width: "100%"
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [ user_id, setUserID] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    var user = sessionStorage.getItem("user");
    var isLogin = 0;

    const emailVal = document.getElementById("email").value;
    const passwordVal = document.getElementById("password").value;
    const text = document.getElementById("text");


    try{

      const response = await axios.post('http://localhost:3001/login', 
      {
       email: emailVal,
       password: passwordVal,
      }
      );

      console.log('response', response)


      if(response.status === 200){
        
        setSuccess('Login is successful. You are directed to the portal...')
        setTimeout( () => {

          const user = [document.getElementById("email").value , document.getElementById("password").value];
            
            if(user == null){
              sessionStorage.setItem("user","");
            }

            if (response.data.email == emailVal && response.data.password == passwordVal) {

              text.innerHTML = "The login information is correct!";
              text.style.color = "#57e257";
              window.location ="/home";

              const userData = response.data
              sessionStorage.setItem("user_id", userData.user_id);
              isLogin = 1;
              sessionStorage.setItem("isLogin", isLogin);
              
              sessionStorage.setItem("user" , user);

              }
            else {
                text.innerHTML = "The login information is incorrect!";
                text.style.color = "#540404";
            }

              }, 2000);  
        }
        }catch(err){
            setError('Error! Try again!');
        }

    }
            
  return (

    <div className="container-fluid backgroundImage">
    <div className="col-4 formStyle"> 
    
      <form onSubmit={handleSubmit} >
        <div className="row">
        <div className="col-12">
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label d-flex fw-bold" style={textStyle}>
            Email address
          </label>
          <input
            value={email}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" style={textStyle} className="text-start text-lg-start">
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

        <button type="submit" className="btn btn-dark p-1" style={submitStyle}>
          Submit
        </button>

        

        </div>
        </div>
        </div>
        <div id="signInExp" style={textStyle} className="mb-3 d-flex">
        Please <Link to="/SignUp" style={{textDecoration: "none", color: "#540404"}} className="mx-1 fw-bold"> click </Link> to create an account.
          </div>
        </form>

        {error && <p style={{color:'red'}}> {error} </p> }
            {success && <p style={{color: 'green'}}>{success}</p>}

        <div className="d-flex col-3 mb-3" >


        </div>
        <div className="row">
          <div className="col-12 text-start forgotPass"> 
            <Link to="Forgotpassword" id="text" style={forgotPass} > Did you forget your password ?   </Link>
          </div>
        </div>

      
    </div>
    </div>
  );
  }

export default SignIn;
