import { Link , useNavigate} from "react-router-dom";
import React,{ useState,  useEffect} from 'react';
import axios from "axios";

const PersInfo = () => {
    
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] =  useState('');
    const [bDate, setBDate] =  useState('');
    const [gender, setGender] =  useState('');
    const [nationality, setNationality] =  useState('');
    const [secondNationality, setSecondNationality] =  useState('');
    const [IDNumber, setIDNumber] =  useState('');
    const [disability, setDisability] =  useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleSubmit = async(e) => {
        
        e.preventDefault();

        const userId = sessionStorage.getItem('user_id');

        try{

            const response = await axios.post('http://localhost:3001/personalinfo',{
            user_id: userId,
            email: email,
            phone: phone,
            name: name,
            lastName: lastName,
            bDate: bDate,
            gender: gender,
            nationality: nationality,
            secondNationality: secondNationality,
            IDNumber: IDNumber,
            disability: disability,
            
        });
        
        if (response.status === 200) {
            setSuccess("The application has been successfully received.");

            setEmail("");
            setPhone("");
            setName("");
            setLastName("");
            setBDate("");
            setGender("");
            setNationality("");
            setSecondNationality("");
            setIDNumber("");
            setDisability("");
            setError("");

            
          } else {
            setError(response.data.error);
            
          }
    }catch(err){
        console.log(err);
        setError("An error occurred in the database connection. 3", err);
    }
    }

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
    const buttonStyle={
        backgroundColor: "0d6efd",
        
    }
    
return(
    <>
    <div className="container text-start ">
    <form className="g-3 needs-validation" onSubmit={handleSubmit} >

        <div className="row mt-2">
            <div className=" col-12 col-lg-8 d-flex align-items-center justify-content-center mx-auto" style={classBorder}>
                <Link className="navbar-brand" to="https://global.khas.edu.tr/" target="_blank"> <img src="https://global.khas.edu.tr/wp-content/uploads/sites/49/2022/09/EEO.png" alt="Global" width="300px" /></Link>
            </div>
        </div>
        

        <div className="row mt-2">
            <div className="col-12 col-lg-8 d-flex flex-column align-items-center justify-content-center mx-auto" style= {classBorder}> 
                <div className="col-12 d-flex flex-column">
                <h5 className="mt-3"> Erasmus Program Application Form </h5>
                <p className="mb-3"> Please fill in the following fields to apply for the program.</p> <hr/>
                </div>
                <hr/>
            
                <div className="col-12  d-flex mx-auto ">

                    {/* { isLogin ?  <> <p id="formMail" className="formMail"> {email} </p><Link to="/" className="form_button formMail" type="button" onClick={() => logOut()}> Change Account </Link></> :   
                    <><p className="appFormDefault"> Please sign in. </p><Link to="/" className="form_button appFormDefault" type="button"> Login in</Link></>}
                   */}
                </div>
                <div className="col-12 d-flex flex-column text_files">
                    <p className="text-start"> After you log in, the information associated with your account is saved when you upload the files and submit this form. The email address you entered is only a part of your response.</p>
                    <p style={requiredFiled}> * Required Field </p>
                </div>
        </div>
        </div>

        <div className="row mt-2 text-center">
            <div className="col-12 col-lg-8 d-flex flex column mx-auto pt-2" > 
                <div className="col-12 d-flex flex-column mx-auto" > 
                <h5 style={{color: "gray"}}> Personal Information</h5>
                </div>
            </div>
        </div>

        <div className="row mt-2 ">
            <div className="col-12 col-lg-6 d-flex mx-auto pt-2" style={classBorder} > 
                <div className="col-12  d-flex flex-column  " > 
                <label htmlFor="email" className="emailText"> Email: <span className="col-2" style={requiredFiled} > * </span> </label> <br/>
                <input type="email" id="email" name="email" className=" email col-8 form-control" style={inputBorder} required pattern=".+@.+.com" 
                 value={email}
                 onChange= {(e) => setEmail(e.target.value)}
                /><br />
                <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="phone" className="phoneText"> Phone: <span className=" col-2" style={requiredFiled}> * </span></label>
                    <p className="ExpP"> e.g. : 05061089291 </p>
                    <input type="phone" id="phone" name="phone" className="phone col-8 form-control" style={inputBorder} required 
                       value={phone} onChange= {(e) => setPhone(e.target.value)}
                    /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="name" className="nameText"> Name: <span className="col-2"  style={requiredFiled}> * </span></label> <br/>
                    <input type="text" id="name" name="name" className=" name col-8 form-control" style={inputBorder} required 
                    value={name} onChange= {(e) => setName(e.target.value)}
                    /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="lastName" className="lastNameText"> Last Name: <span className="col-2"  style={requiredFiled} > * </span></label> <br/>
                    <input type="text" id="lastName" name="lastName" className=" lastName col-8 form-control" style={inputBorder} required  
                    value={lastName} onChange= {(e) => setLastName(e.target.value)}
                       /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="bdate" className="birthDateText"> Birth Date: <span className=" col-2"  style={requiredFiled}> * </span></label> <br/>
                    <input type="date" id="bDate" name="bDate" className="birthDate col-4 form-control" style={inputBorder} required     
                    value={bDate} onChange= {(e) => setBDate(e.target.value)}
                    /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" >
                    <label htmlFor="gender" className="genderText"> Gender: <span className="col-2"  style={requiredFiled}> * </span> </label> <br/>
                    <select name="gender" id="gender" className=" gender col-5 form-control" style={inputBorder} required  value={gender} 
                    onChange= {(e) => setGender(e.target.value)}
                    > 
                        
                        <option value="" > </option>
                        <option value="female"> Female </option>
                        <option value="male"> Male </option>
                    </select>
                    <br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className="col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="nationality" className="nationalText"> Nationality: <span className="col-2"  style={requiredFiled}> * </span></label> <br/>
                    <input type="text" id="nationality" name="nationality" className=" nationality col-8 form-control" style={inputBorder} required     
                    value={nationality} onChange= {(e) => setNationality(e.target.value)}
                    /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>



        <div className="row mt-2">
            <div className="col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder }> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="secondNationality" className="2nd_NationalText"> 2nd Nationality:</label> <br/>
                    <input type="text" id="secondNationality" name="secondNationality" className=" secondNationality col-8" style={inputBorder}     
                    value={secondNationality} onChange= {(e) => setSecondNationality(e.target.value)}
                    /><br/>
                </div>
            </div>
        </div>

        <div className="row mt-2">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor=" IDNumber" className=" IDNumberText"> ID Number: <span className="col-2"  style={requiredFiled}> *</span></label> <br/>
                    <input type="number" id="IDNumber" name=" IDNumber" className="  IDNumber col-8 form-control" style={inputBorder} required     
                    value={IDNumber} onChange= {(e) => setIDNumber(e.target.value)}
                    /><br/>
                    <div className="valid-feedback"> Looks good!</div>
                </div>
            </div>
        </div>


        <div className="row mt-2 mb-4">
            <div className=" col-12 col-lg-6 d-flex flex-column mx-auto pt-2" style={classBorder}> 
                
                <div className="col-12 d-flex flex-column mx-auto" > 
                    <label htmlFor="disability" className="disabilityText"> Disability Condition:  </label> <br/>
                    <select name="disability" id="disability" className="disability col-5 form-control" style={inputBorder}
                        value={disability} onChange= {(e) => setDisability(e.target.value)}
                     > 
                        
                        <option value="" > </option>
                        <option value="yes"> Yes </option>
                        <option value="no"> No </option>
                    </select> <br/>
                    {/* {selectedValue === "yes" && (
                        <><label htmlFor="expDisability" className="expDisabilityText hiddenDisa"> Disability Explanation: <span className=" col-2 " style={requiredFiled}> * </span> </label><br /><textarea type="text" id="expDisability" name="expDisability" className=" expDisability col-8 hiddenDisa form-control" style={inputBorder} required    > </textarea><br /></>
                        )} */}
                   
                </div>

            </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-end align-content-center "  style={buttonStyle}> 
            <button type="submit" value="Next" id="save_btn_id" />
        </div>
    </form>
    <div>
    {error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}

      </div>
    
  


    <div className="row d-flex justify-content-center align-items-center">
    


        <div className="col-12 col-lg-12 d-flex flex-column justify-content-center align-content-center text-end"> 
        <p style={{fontStyle: "italic", color: "gray"}}> Next page: Education Information </p>
    </div>

    </div>
    


</div>
    
    </>

);

}


export default PersInfo;