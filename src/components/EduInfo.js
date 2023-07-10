
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const EduInfo = () => {


    const [ university, setUniversity] = useState('');
    const [ department, setDepartment] = useState('');
    const [ graduation, setGraduation] = useState('');
    const [ gDate, setGDate] = useState('');
    const [ GPA, setGPA] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3001/form/educationinfo',{
            university,
            department,
            graduation,
            gDate,
            GPA,
        });

        console.log(response);
        if(response.status === 200){
            setSuccess("The application has been successfully received.");

            setUniversity('');
            setDepartment('');
            setGraduation('');
            setGDate('');
            setGPA('');
            setError('');

            navigate('/contactinfo')
            
        }else{
            setError(response.data.error)
        }
    }catch(err){
        console.log(err);
        setError("An error occurred in the database connection. ", err);
    }
    }

    const navigate = useNavigate();

    const requiredFiled = {
        color: "red",
        paddingLeft: "10px"
    }

    const inputBorder = {
        border: 0,
        borderBottom: "1px solid" 
    }

    const classBorder = {
        border: "2px solid black",
        borderRadius: "15px",
        borderColor: "#CACFD2",

    }
    

return(
    <>
    <div className="container text-start ">
    <form className="g-3 needs-validation"  >

    <div className="row mt-2 text-start">
            <div className="col-12 col-lg-5 d-flex flex column mx-auto pt-2" > 
                <div className="col-12 d-flex flex-column mx-auto text-center" > 
                <h5 style={{color: "gray"}}> Education Information</h5>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="university" className="universityText"> University: <span className=" col-2" style={requiredFiled} > * </span></label> <br/>
                    <input type="text" id="university" name="university" className="university col-8 form-control" style={inputBorder} required 
                    value={university} onChange= {(e) => setUniversity(e.target.value)} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="department" className="departmentText"> Department: <span className=" col-2" style={requiredFiled} > * </span></label> <br/>
                    <input type="text" id="department" name="department" className=" department col-8 form-control" style={inputBorder} required 
                    value={department} onChange={(e) => setDepartment(e.target.value)}/><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" >
                    <label htmlFor="graduation" className="graduation"> Graduation Status: <span className="col-2 " style={requiredFiled} > * </span> </label> <br/>
                    <select name="graduation" id="graduation" className=" graduation col-5 form-control" style={{padding: "3px", border: "0", borderBottom: "1px solid"}} required 
                    value={graduation} onChange={ (e) => setGraduation(e.target.value)}> 
                        <option value="" > </option>
                        <option value="yes"> Yes </option>                              
                        <option value="no"> No </option>
                    </select> 
                    <br/> <br/>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto mt-1 mb-0" > 
                    <label htmlFor="gdate" className="graduationDateText"> Graduation Date: <span className=" col-2" style={requiredFiled} > * </span></label> <br/>
                    <input type="date" id="gDate" name="gDate" className="birthDate col-4 form-control" required style={inputBorder } 
                    value={gDate} onChange={(e) => setGDate(e.target.value)} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-5 d-flex flex-column mx-auto pt-2 mb-3" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto mt-0" > 
                    <label htmlFor="GPA" className="GPA_Text"> GPA: <span className=" col-2" style={requiredFiled}> * </span></label> <br/>
                    <input type="number" id="GPA" name="GPA" className=" GPA col-1 form-control"  style={inputBorder} required 
                    value={GPA} onChange={(e) => setGPA(e.target.value)} /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>
        <div className="col-4 col-lg-6 d-flex justify-content-end align-content-end"> 
            <button type="submit" value="Next" id="save_btn_id" /> 
        </div>

    </form>

    <div>
    {error && <p style={{color: 'red'}}> {error} </p>}
    {success && <p style={{color: 'green'}}> {success} </p>}

    </div>
    
    <div className="row d-flex justify-content-center align-items-start">

        <div className="col-4 col-lg-4 d-flex text-start"> 
            <p style={{fontStyle: "italic",color:"gray"}} > Previous page: Personal Information </p>
        </div>



        <div className="col-4 col-lg-4 d-flex flex-column justify-content-end align-content-end text-end"> 
            <p style={{fontStyle: "italic", color:"gray"}}> Next page: Contact Information </p>
        </div>

    </div>
    


</div>
    
    </>

);

}


export default EduInfo;