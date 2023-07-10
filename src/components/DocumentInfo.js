import axios from "axios";
import React,{ useState} from "react";
import { useNavigate } from "react-router-dom";
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

const ExpP = {
    fontSize: "12px",
    padding: "1px",
}


const Document = () => {

    const navigate = useNavigate();


    const [ CV_document, setCV_document] = React.useState('');
    const [ Letter_document, setLetter_document] = React.useState('');
    const [ Passp_document, setPassp_document] = React.useState('');
    const [ Residence_document, setResidence_document] = React.useState('');
    const [ Diploma_document, setDiploma_document] = React.useState('');
    const [ Certificate_document, setCertificate_document] = React.useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
 
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3001/form/documentinfo',{
            CV_document,
            Letter_document,
            Passp_document,
            Residence_document,
            Diploma_document,
            Certificate_document,
        });
 
        console.log(response);
        if(response.status === 200){
            setSuccess("The application has been successfully received.");
 
            setCV_document('');
            setLetter_document('');
            setPassp_document('');
            setResidence_document('');
            setDiploma_document('');
            setCertificate_document('');

            setError('');
 
            navigate('/home')
            
        }else{
            setError(response.data.error)
        }
    }catch(err){
        console.log(err);
        setError("An error occurred in the database connection. ", err);
    }
    }
    

    return(
        <>  
            
             <main className="aboutContactMain " >
                <div className="container mt-3"> 
                <form onSubmit={handleSubmit}> 
                    <div className="row d-flex  h-100 w-100 p-4" style={classBorder}> 
                        <div className="col-12 d-flex flex-column "  > 
                            <div className="col-12 d-flex flex-column mx-auto" > 
                                <label for="document" className="document" style={{fontWeight: 'bold', fontStyle: 'italic', color: 'grey', fontSize:'large'}}> Upload Files </label> <br/>

                                <p style={uploadList} className="text-start"> Upload CV </p>
                                
                                <p style={ExpP} className="text-start"> Please upload your CV in PDF format. </p>
                                    <input type="file" id="document1" name="CV_document" className=" document col-12" 
                                    value={CV_document} onChange={(e) => setCV_document(e.target.value)} /><br/>

                                <p style={uploadList} className="text-start"> Upload Motivation Letter</p>
                                    <input type="file" id="document2" name="Letter_document" className=" document col-12" 
                                    value={Letter_document} onChange={(e) => setLetter_document(e.target.value)} /> <br/>

                                <p style={uploadList} className="text-start"> Upload Passport Copy</p>
                                    <input type="file" id="document3" name="Passp_document" className=" document col-12" 
                                    value={Passp_document} onChange={(e) => setPassp_document(e.target.value)} /> <br/>

                                <p style={uploadList} className="text-start"> Upload Residence Information</p>
                                    <input type="file" id="document4" name="Residence_document" className=" document col-12"  
                                    value={Residence_document} onChange={(e) => setResidence_document(e.target.value)} /> <br/>

                                <p style={uploadList} className="text-start" > Upload Diploma</p>
                                    <input type="file" id="document5" name="Diploma_document" className=" document col-12"  
                                    value={Diploma_document} onChange={(e) => setDiploma_document(e.target.value)} /> <br/>

                                <p style={uploadList} className="text-start" > Upload English Proficiency Certificate</p>
                                    <input type="file" id="document6" name="Certificate_document" className=" document col-12" 
                                    value={Certificate_document} onChange={(e) => setCertificate_document(e.target.value)} /> <br/>
                                <div className="row d-flex justify-content-center align-items-center mt-3">
    
                                    <div className="col-12 col-lg-6 d-flex justify-content-center align-content-center mb-3"> 
                                        <button type="submit" value="Upload" id="save_btn_id" /> 
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                        <div> 
                            {error && <p style={{color: 'red'}}> {error} </p>}
                            {success && <p style={{color: 'green'}}> {success} </p>}

                        </div>
                </div>
            </main>
            
            
        </>
    );
}
export default Document;