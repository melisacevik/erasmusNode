import {Link} from "react-router-dom";

function About() {
    return(
        <> 
        <main className="aboutContactMain">
        <div className="container">

            <div className="row d-flex justify-content-center align-items-center p-3 ">
                <div className="col-12 col-lg-10 d-flex flex-column justify-content-center align-items-center"> 
                    <h4 className="mb-5 aboutText mt-5"> Erasmus Application Process </h4>
                    <ul className="aboutText text-start">
                        <li className="mb-3 "> To be eligible for acceptance, the minimum GPA requirement is <span style={{fontWeight: "bold"}}> 2.5</span>. Students with a GPA lower than <span style={{fontWeight: "bold"}}> 2.5</span> will not be evaluated.</li>
                        <li className="mb-3"> Students who will enroll in our university must first create a registration on the Erasmus Application page.</li>
                        <li className="mb-3"> After registration, please log in.</li>
                        <li className="mb-3"> You need to click on the Application Form and enter your information completely.</li>
                        <li className="mb-3"> After entering your information, please upload your CV, motivation letter, passport copy, residence permit document, diploma, and English proficiency certificate to the required sections.</li>
                        <li className="mb-3"> If you have any questions, you can contact us by sending an email through the <Link to="/contact"> contact </Link> 💌 section.</li> <br/> <br/> 
                    </ul>
                
                </div>
            </div>
            
        </div>
    </main>
    </>
    );
}
export default About;