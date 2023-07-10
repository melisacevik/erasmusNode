import { Link } from "react-router-dom";

const FormSuccess = (props) => {
    const successStyle = {
        border: "2px solid black",
        borderRadius: "15px",
        borderColor: "green",

    }

    const successHead = {
        color: "green", 
        formWeigth: "bold",
        fontFamily: "Poppins"
    }

    const successText = {
        fontFamily: "Poppins", 
        padding:"5",
        marginTop: "5",
    }
    return(
        <>
          <main className="aboutContactMain">
            <div className="container">

                <div className="row justify-content-end align-content-center mt-5 ">
                <div className="col-8 col-lg-10 d-flex flex-column justify-content-center align-items-center mt-5 p-5" style={successStyle}> 
                        <div className="mt-3">
                        <h3 style={successHead}> 🥳 YOUR FORM HAS BEEN SUBMITTED 🥳 </h3>
                        <p style= {successText}> If you wish to make updates, you can do so from the "profile" page.
                        If you have any questions regarding your application, please <Link to = "/contact"> contact 📞 </Link>us here</p>
                        </div>
                </div>
                </div>
            </div>
            </main>
        </>
    );


}

export default FormSuccess