import {Link} from "react-router-dom";

function forgotPass(){


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


return (

<div className="container-fluid backgroundImage">
<div className="col-4 formStyle"> 

  <form>
    <div className="row">
    <div className="col-12">
    <div className="mb-3 ">
      <label htmlFor="email" className="form-label d-flex fw-bold" style={textStyle}>
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        aria-describedby="emailHelp"
        
      />
      <div id="emailHelp" style={textStyle} className="text-start text-lg-start">
        We'll never share your email with anyone else.
      </div>
    </div>
    </div>
    </div>

    <div id="signInExp" style={textStyle} className="mb-3 d-flex">
    Please <Link to="/SignUp" style={{textDecoration: "none", color: "#540404"}} className="mx-1 fw-bold"> click </Link> to create an account.
      </div>
    </form>
  

    <div className="d-flex col-3 " >
    <button type="submit" className="btn btn-dark p-1" style={submitStyle}>
      Submit
    </button>

    </div>


  
</div>
</div>
);
}


export default forgotPass;