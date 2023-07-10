import React, { Component } from 'react'
const uploadList = {
           
    fontStyle: "italic",
    fontWeight: "bold",
    color : "firebrick",

}

const classBorder={
    border: "2px solid black",
    borderRadius: "15px",
    borderColor: "#CACFD2",
}


const buttonStyle={
    backgroundColor: "0d6efd",
    
}

export default class changePass extends Component {
  render() {

    const changePassControl = (event) => {
        event.preventDefault(); 
        const currentPass = document.getElementById('currentPass').value;
        const newPass = document.getElementById('newPass').value;
        const reNewPass = document.getElementById('reNewPass').value;
      
        const user = sessionStorage.getItem('user');
        let oldPassword = user.split(",")[1];
        const email = user.split(",")[0];

       if ( currentPass == oldPassword && newPass == reNewPass && oldPassword != newPass){
            sessionStorage.getItem('user');
            sessionStorage.setItem('user', [ email, newPass ]);
            alert("Your password has been successfully changed.");
            window.location.reload()
       }else{
        alert("The current password you entered does not match the new password you entered. Please ensure that your new password is different from your current password.")
       }
    }        
      
    
      
    

    return (
        
        <main className="aboutContactMain " >
                <div className="container mt-3"> 
                <form method='get' onSubmit={changePassControl}> 
                    <div className="row d-flex  h-100 w-100 p-4" style={classBorder}> 
                        <div className="col-12 d-flex flex-column "  > 
                            <div className="col-12 d-flex flex-column mx-auto" > 
                                <label htmlFor="document" className="document" style={{fontWeight: 'bold', fontStyle: 'italic', color: 'grey', fontSize:'large'}}> Change Password </label> <br/>

                                <p style={uploadList} className="text-start"> Please enter your current password. </p>
                                <input type="password" id="currentPass" name="currentPass" className=" currentPass col-8 form-control" required /> <br />


                                <p style={uploadList} className="text-start"> Please enter your new password. </p>
                                <input type="password" id="newPass" name="newPass" className=" newPass col-8 form-control"  required  /> <br />

                                <p style={uploadList} className="text-start"> Please re-enter your new password. </p>
                                <input type="password" id="reNewPass" name="reNewPass" className=" reNewPass col-8 form-control"  required  /> <br />


                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 d-flex justify-content-end align-content-center mt-3"  style={buttonStyle}> 
                         <input type="submit" value="Save" id="change_pass_id"  />
        </div>

                </form>
                </div>
            </main>

    )
  }
}
