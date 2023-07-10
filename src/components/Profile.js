import { useState, useEffect} from "react";
import { BsFillTrash2Fill , BsPerson } from "react-icons/bs";
import {Link} from "react-router-dom";



const Profile = () => {


    const [persObject, setPersObject] = useState("");
    const [ eduObject, setEduObject] = useState("");
    const [contactObject, setContactObject] = useState("");
    const [docuObject, setDocuObject] = useState("");


    const handleOnPersInfoChange = (event) => {
        

        const input_name = event.target.name; 
        const input_value = event.target.value; 

        const sessionData = JSON.parse(sessionStorage.getItem("personalInfo"))

        setPersObject(() => ({...sessionData, [input_name]: input_value }))
                                                
      
    }

    const handleOnEduChange = (event) => {
        const input_name = event.target.name;
        const input_value = event.target.value;

        const sessionEduData = JSON.parse(sessionStorage.getItem("educationInfo"))

        setEduObject(() => ({...sessionEduData, [input_name]: input_value}))
    }
  
    
     const handleOnContactInfoChange = (event) => {

         const input_name = event.target.name; 
         const input_value = event.target.value; 

         const sessionContactData = JSON.parse(sessionStorage.getItem("contactInfo"))

         setContactObject(values => ({...sessionContactData, [input_name]: input_value }))
                                                 
      
     }
     const handleOnDocuInfoChange = (event) => {

        const input_name = event.target.name; 
        const input_value = event.target.value; 

        const sessionDocuData = JSON.parse(sessionStorage.getItem("documentInfo"))
        setDocuObject(values => ({...sessionDocuData, [input_name]: input_value }))
                                                
     }
    

    const submitForm = function(event) {
        event.preventDefault();

        
        

        if( persObject !== ""){
            sessionStorage.setItem("personalInfo", JSON.stringify(persObject));
        }

        if ( eduObject !== ""){
            sessionStorage.setItem("educationInfo", JSON.stringify(eduObject));
        } 
        if ( contactObject !== ""){
            sessionStorage.setItem("contactInfo", JSON.stringify(contactObject));
        } 
        if ( docuObject !== ""){
            sessionStorage.setItem("documentInfo", JSON.stringify(docuObject));
        } 
        
    }

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [bDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [nationality, setNationality] = useState("");
    const [secondNationality, setSecondNtn] = useState("");
    const [IDnumber, setIDnumber] = useState("");
    const [disability, setDisability] = useState("");
    const [expDisability, setExpDisability] = useState("");
    const [university, setUniversity] = useState("");
    const [department, setDepartment] = useState("");
    const [graduation, setGraduation] = useState("");
    const [gDate, setGDate] = useState("");
    const [GPA, setGPA] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [district, setDistrict] = useState("");
    const [neighborhood, setNeighborhood] = useState("");
    const [street, setStreet] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [CV, setCV] = useState("");
    const [englishCert, setEnglishCert] = useState("");
    const [diploma, setDiploma] = useState("");
    const [letter, setLetter] = useState("");
    const [passport, setPassport] = useState("");
    const [residence, setResidence] = useState("");
    
    function renderSelect() {
        
        if (gender === "") {
          return (
           null
          );
        } else {
          
          return null; 
        }
      }

    useEffect(() => {

       
        if( sessionStorage.getItem("personalInfo")){
            const personalInfo = JSON.parse(sessionStorage.getItem("personalInfo"))
            setEmail(personalInfo["email"]);
            setPhone(personalInfo["phone"]);
            setName(personalInfo["name"]);
            setLastName(personalInfo["lastName"]);
            setBirthDate(personalInfo["bDate"]);
            setGender(personalInfo["gender"]);
            setNationality(personalInfo["nationality"]);
            setSecondNtn(personalInfo["secondNationality"]);
            setIDnumber(personalInfo["IDnumber"]);
            setDisability(personalInfo["disability"]);
            setExpDisability(personalInfo["expDisability"]);
        }
       
        if(sessionStorage.getItem("educationInfo")){
            const educationInfo = JSON.parse(sessionStorage.getItem("educationInfo"));
            setUniversity(educationInfo["university"]);
            setDepartment(educationInfo["department"]);
            setGraduation(educationInfo["graduation"]);
            setGDate(educationInfo["gDate"]);
            setGPA(educationInfo["GPA"]);
        }

        if(sessionStorage.getItem("contactInfo")){
            const contactInfo = JSON.parse(sessionStorage.getItem("contactInfo")) ;
            setCity(contactInfo["city"]);
            setCountry(contactInfo["country"]);
            setDistrict(contactInfo["district"]);
            setNeighborhood(contactInfo["neighborhood"]);
            setStreet(contactInfo["street"]);
            setZipCode(contactInfo["zipCode"]);
        }

        if(sessionStorage.getItem("documentInfo")){
            const documentInfo = JSON.parse(sessionStorage.getItem("documentInfo"));
            setCV(documentInfo["CV_document"]);
            setEnglishCert(documentInfo["Certificate_document"]);
            setDiploma(documentInfo["Diploma_document"]);
            setLetter(documentInfo["Letter_document"]);
            setPassport(documentInfo["Passp_document"]);
            setResidence(documentInfo["Residence_document"]);
        }



        
        
    }, [])

    
    const profileButton = {
        background: "rgb(99, 39, 120)",
        boxShadow: "none",
        border: "none",
    }
    
    
    const labels = {
        fontSize: "11px",
        color: "grey",
        fontSize: "small"
    }
    const formControl = {
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "100%",
        minWidth: "150px",
      }
      

    return(
        <>
        {
            sessionStorage.getItem('personalInfo') ? 
            <div className="container rounded bg-white mt-5 mb-5">

            <form  className="g-3 needs-validation" novalidate method="get" onSubmit={submitForm}>
                <div className="row">
                    <div className="col-md-2 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        {/* <img id="profilePic "  className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/> */}
                        
                        <BsPerson style={{width: "100px", height: "100px"}}/>
                        
                        <span className="font-weight-bold">{name} {lastName}</span><span className="text-black-50"> </span><span> </span>
                        <Link to="/form/ChangePass" className="mt-0"> Change password </Link>
                        </div>
                        
                    </div>
                    <div className="col-md-5 border-right">
                    {/* <h4 className="text-right">Profile Settings</h4> */}
                        <div className="p-3 py-5">
                            <div className="text-start">
                                
                                <h6> Personal Information</h6>
                            </div>
                            <div className="row">
                             
                                <div className="col-md-12">
                                    <label style={labels}>Email</label>
                                    <div className="input-group">
                                        <input  name="email" type="mail" className="form-control formControl" placeholder="enter email"  value={email} onChange={e => {handleOnPersInfoChange(e) ; setEmail(e.target.value)}} required/>
                                        <div className="input-group-append mt-1">
                                            <span className="input-group-text  m-1 p-1" onClick={e => {handleOnPersInfoChange(e) ; setEmail("")} }  ><BsFillTrash2Fill/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label style={labels}>Mobile Number</label>
                                    <div className="input-group">
                                        <input name="phone" type="number" className="form-control" placeholder="enter phone number" value={phone} onChange={e => {handleOnPersInfoChange(e) ; setPhone(e.target.value)}} required/>
                                        <div className="input-group-append mt-1">
                                            <span className="input-group-text m-1 p-1" onClick = { e => setPhone("")} ><BsFillTrash2Fill/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label style={labels}>Name</label>
                                    <div className="input-group"> 
                                    <input name="name" type="text" className="form-control" placeholder="first name" value={name} onChange={e => {handleOnPersInfoChange(e) ; setName(e.target.value)}} required/>
                                    <div className="input-group-append mt-1">
                                        <span className="input-group-text m-1 p-1" onClick = { e => setName("")} ><BsFillTrash2Fill/></span>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label style={labels}>Surname</label>
                                    <div className="input-group"> 
                                    <input name="lastName" type="text" className="form-control"   placeholder="last name" value={lastName} onChange={e => {handleOnPersInfoChange(e) ; setLastName(e.target.value)}} required/>
                                    <div className="input-group-append mt-1">
                                        <span className="input-group-text m-1 p-1" onClick = { e => setLastName("")}><BsFillTrash2Fill/></span>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label style={labels}>Birthdate</label>
                                    <div className="input-group"> 
                                    <input name="bDate" type="date" className="form-control"   placeholder="birth date" value={bDate} onChange={e => {handleOnPersInfoChange(e) ; setBirthDate(e.target.value)}} required/>
                                    <div className="input-group-append mt-1">
                                        <span className="input-group-text m-1 p-1" onClick = { e => setBirthDate("")} ><BsFillTrash2Fill/></span>
                                    </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label style={labels}>Gender</label>
                                    <div className="input-group"> 
                                        <input name="gender" type="text" className="form-control" placeholder="exp. woman/man" value={gender} onChange={e => {handleOnPersInfoChange(e) ; setGender(e.target.value)}} required />
                                        <div className="input-group-append mt-1">
                                        <span className="input-group-text m-1 p-1" onClick={e => setGender("")}><BsFillTrash2Fill/></span>
                                        {renderSelect()}
                                        </div>
                                    </div>
                                    </div>


                                <div className="col-md-12">
                                <label style={labels}>Nationality</label>
                                <div className="input-group"> 
                                <input name="nationality" type="text" className="form-control"   placeholder="exp. T.C." value={nationality} onChange={e => {handleOnPersInfoChange(e) ; setNationality(e.target.value)}} required/>
                                <div className="input-group-append mt-1">
                                        <span className="input-group-text m-1 p-1" onClick={ e => setNationality("")}><BsFillTrash2Fill/></span>
                                    </div>
                                </div>
                                </div>

                                <div className="col-md-12">
                                    <label style={labels}>2nd Nationality</label>
                                    <div className="input-group"> 
                                        <input name="secondNationality" type="text" className="form-control"   placeholder="exp. K.K.T.C" value={secondNationality} onChange={e => {handleOnPersInfoChange(e) ; setSecondNtn(e.target.value)}}/>
                                        <div className="input-group-append mt-1">
                                                <span className="input-group-text m-1 p-1" onClick={ e => setSecondNtn("")}><BsFillTrash2Fill/></span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <label style={labels}>ID Number</label>
                                    <div className="input-group"> 
                                        <input name="IDnumber" type="number" className="form-control"   placeholder="exp. 12345678901" value={IDnumber} onChange={e => {handleOnPersInfoChange(e) ; setIDnumber(e.target.value)}} required/>
                                            <div className="input-group-append mt-1">
                                                    <span className="input-group-text m-1 p-1" onClick={ e => setIDnumber("")}><BsFillTrash2Fill/></span>
                                            </div>   
                                    </div>
                                </div>

                                <div className="col-md-12">
                                <label style={labels}>Disability</label>
                                <div className="input-group"> 
                                    <input name="disability" type="text" className="form-control"   placeholder="exp. Yes/No " value={disability} onChange={e => {handleOnPersInfoChange(e) ; setDisability(e.target.value)}} />
                                        <div className="input-group-append mt-1">
                                                <span className="input-group-text m-1 p-1 " onClick={ e => setDisability("")} ><BsFillTrash2Fill/></span>
                                            {renderSelect()}
                                        </div> 
                                </div>
                                </div>

                                <div className="col-md-12">
                                <label style={labels}>Disability Explanation</label>
                                <div className="input-group"> 
                                    <input name="ExpDisability" type="text" className="form-control"   placeholder="exp. Visually disabled " value={expDisability} onChange={e => {handleOnPersInfoChange(e) ; setExpDisability(e.target.value)}} required/>
                                        <div className="input-group-append mt-1">
                                                <span className="input-group-text m-1 p-1 " onClick = { e => setExpDisability("")}><BsFillTrash2Fill/></span>
                                        </div> 
                                </div>
                                </div>
                                 
                            </div>
                            <div className="row">
                            <div className="p-3 py-5 text-start">

                            <h6> Education Information</h6>

                            <div className="col-md-12 text-center">
                            <label style={labels}>University</label>
                            <div className="input-group"> 
                                <input name="university" type="text" className="form-control" placeholder="university" value={university} onChange={e => {handleOnEduChange(e) ; setUniversity(e.target.value)}} required/>
                                    <div className="input-group-append mt-1">
                                                <span className="input-group-text m-1 p-1 " onClick={ e => setUniversity("")} ><BsFillTrash2Fill/></span>
                                    </div> 
                            </div>
                            </div>

                            <div className="col-md-12 text-center">
                            <label style={labels}>Department</label>
                            <div className="input-group"> 
                            <input name="department" type="text" className="form-control" placeholder="department" value={department} onChange={ e => {handleOnEduChange(e) ; setDepartment(e.target.value)}} required/>
                                <div className="input-group-append mt-1">
                                    <span className="input-group-text m-1 p-1 " onClick = { e => setDepartment("")}><BsFillTrash2Fill/></span>
                                </div> 
                            </div>
                            </div>

                            <div className="col-md-12 text-center">
                            <label style={labels}>Graduations Status</label>
                            <div className="input-group"> 
                            <input name="graduation" type="text" className="form-control" placeholder="Yes/No" value={graduation} onChange={e => {handleOnEduChange(e) ; setGraduation(e.target.value)}} required/>
                                <div className="input-group-append mt-1">
                                    <span className="input-group-text m-1 p-1 " onClick={ e => setGraduation("")}><BsFillTrash2Fill/></span>
                                    {renderSelect()}
                                </div> 
                            </div>
                            </div>


                            <div className="col-md-12 text-center">
                            <label style={labels}>Graduation Date</label>
                            <div className="input-group"> 
                            <input name="gDate" type="date" className="form-control" placeholder="date" value={gDate} onChange={e => {handleOnEduChange(e) ; setGDate(e.target.value)}} required/>
                                <div className="input-group-append mt-1">
                                    <span className="input-group-text m-1 p-1 " onClick={ e => setGDate("")} ><BsFillTrash2Fill/></span>
                                    
                                </div> 
                            </div>
                            </div>

                            <div className="col-md-12 text-center">
                            <label style={labels}>GPA</label>
                            <div className="input-group"> 
                            <input name="GPA" type="number" className="form-control" placeholder="GPA" value={GPA} onChange={e => {handleOnEduChange(e) ; setGPA(e.target.value)}} required/>
                                <div className="input-group-append mt-1">
                                    <span className="input-group-text m-1 p-1 " onClick={ e => setGPA("")}><BsFillTrash2Fill/></span>
                                </div> 
                            </div>
                            </div>

                        </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className="col-md-5 ">
                  
                        <div>
                        <div className="p-3 py-5">
                            <div className="text-start">
                                <h6> Contact Information</h6>
                            </div>

                            <div className="col-md-12">
                            <label style={labels}>Country</label>
                            <div className="input-group"> 
                                <input name="country"  type="text" className="form-control" placeholder="country" value={country} onChange={e => {handleOnContactInfoChange(e) ; setCountry(e.target.value)}} required/>
                                    <div className="input-group-append mt-1">
                                            <span className="input-group-text m-1 p-1 " onClick= { e => setCountry("")} ><BsFillTrash2Fill/></span>
                                    </div> 
                            </div>
                            </div>

                            <div className="col-md-12">
                            <label style={labels}>City</label>
                            <div className="input-group"> 
                                <input name="city" type="text" className="form-control" placeholder="city" value={city} onChange={ e => {handleOnContactInfoChange(e) ; setCity(e.target.value)}} required/>
                                    <div className="input-group-append mt-1">
                                            <span className="input-group-text m-1 p-1 " onClick = { e => setCity("")}><BsFillTrash2Fill/></span>
                                    </div> 
                            </div>
                            </div>

                            <div className="col-md-12">
                            <label style={labels}>District</label>
                            <div className="input-group"> 
                            <input name="district" type="text" className="form-control" placeholder="district" value={district} onChange={ e => {handleOnContactInfoChange(e) ; setDistrict(e.target.value)}} required/>
                                    <div className="input-group-append mt-1">
                                            <span className="input-group-text m-1 p-1 " onClick = { e => setDistrict("")} ><BsFillTrash2Fill/></span>
                                    </div> 
                            </div>
                            </div>

                            <div className="col-md-12">
                            <label style={labels}>Neighborhood</label>
                            <div className="input-group"> 
                                <input name="neighborhood" type="text" className="form-control" placeholder="neighborhood" value={neighborhood} onChange= { e => {handleOnContactInfoChange(e) ; setNeighborhood(e.target.value)}} required />
                                    <div className="input-group-append mt-1">
                                            <span className="input-group-text m-1 p-1 " onClick= { e => setNeighborhood("")} ><BsFillTrash2Fill/></span>
                                </div>  

                            </div>
                            </div>

                            <div className="col-md-12">
                            <label style={labels}>Street</label>
                            <div className="input-group"> 
                                <input name="street" type="text" className="form-control" placeholder="street" value={street} onChange={e => {handleOnContactInfoChange(e) ; setStreet(e.target.value)}} required/>
                                    <div className="input-group-append mt-1">
                                            <span className="input-group-text m-1 p-1 " onClick= { e => setStreet("")} ><BsFillTrash2Fill/></span>
                                </div>  

                            </div>
                            </div>

                            <div className="col-md-12">
                            <label style={labels}>Zip Code</label>
                            <div className="input-group"> 
                            <input name="zipCode" type="text" className="form-control" placeholder="zip code" value={zipCode} onChange={e => {handleOnContactInfoChange(e) ; setZipCode(e.target.value)}} required />
                                <div className="input-group-append mt-1">
                                            <span className="input-group-text m-1 p-1 " onClick = { e => setZipCode("")}><BsFillTrash2Fill/></span>
                                </div>  
                            </div>
                            </div>


                        </div>
                        </div>
                        <div>
                        <div className="p-3 py-5 mt-0">
                            <div className="text-start">
                                <h6 > Document Information</h6>
                            </div>


                            <div className="col-md-12">
                            <label style={labels}>CV</label>
                            { CV != "" && 
                            <div className="input-group" >
                            <p className="form-control text-start " style={formControl} > {CV}</p>
                                <div className="input-group-append mt-1 ">
                                            <span className="input-group-text m-1 p-1 " onClick = { e => setCV("")}><BsFillTrash2Fill/></span>
                                </div>  
                            </div>
                            }

                            <div className="input-group" >
                                <input name="CV_document" type="file" className="form-control" style={formControl} placeholder="CV" onChange={e => {handleOnDocuInfoChange(e) ; setCV(e.target.value)}} />
                                    
                            </div>
                            </div>
                            
                            <div className="col-md-12 mt-4">
                            <label style={labels}>Motivation Letter</label>
                            { letter != "" && 
                            <div className="input-group">
                            <p className="form-control text-start " style={formControl} > {letter}</p>
                                <div className="input-group-append mt-1 ">
                                    <span className="input-group-text m-1 p-1 " onClick = { e => setLetter("")}><BsFillTrash2Fill/></span>
                                </div>  
                            </div>
                        }
                            <div className="input-group"> 
                                <input name="Letter_document" type="file" className="form-control" style={formControl} placeholder="Motivation Letter" onChange={e => {handleOnDocuInfoChange(e) ; setLetter(e.target.value)}} />
                        
                            </div>
                            </div>

                            <div className="col-md-12 mt-4">
                            <label style={labels}>Passport Copy</label>
                            { passport != "" && 
                            <div className="input-group">
                            <p className="form-control text-start " style={formControl} > {passport}</p>
                                <div className="input-group-append mt-1 ">
                                    <span className="input-group-text m-1 p-1 " onClick = { e => setPassport("")}><BsFillTrash2Fill/></span>
                                </div>  
                            </div>
                        }

                            <div className="input-group"> 
                                <input name="Passp_document" type="file" className="form-control" placeholder="Passport Copy" style={formControl} onChange={e => {handleOnDocuInfoChange(e) ; setPassport(e.target.value)}}  />
                                    
                            </div>
                            </div>

                            <div className="col-md-12 mt-4">
                            <label style={labels}>Residence Information</label>
                            { residence != "" && 
                            <div className="input-group">
                            <p className="form-control text-start " style={formControl} > {residence}</p>
                                <div className="input-group-append mt-1 ">
                                    <span className="input-group-text m-1 p-1 " onClick = { e => setResidence("")}><BsFillTrash2Fill/></span>
                                </div>  
                            </div>
                        }
                            <div className="input-group"> 
                                <input name="Residence_document" type="file" className="form-control" style={formControl} placeholder="Residence"  onChange={e => {handleOnDocuInfoChange(e) ; setResidence(e.target.value)}} />
                                    
                            </div>
                            </div>

                            <div className="col-md-12 mt-4">
                            <label style={labels}>Diploma</label>
                            { diploma != "" && 
                            <div className="input-group">
                            <p className="form-control text-start " style={formControl} > {diploma}</p>
                                <div className="input-group-append mt-1 ">
                                    <span className="input-group-text m-1 p-1 " onClick = { e => setDiploma("")}><BsFillTrash2Fill/></span>
                                </div>  
                            </div>
                        }
                            <div className="input-group"> 
                                <input name="Diploma_document" type="file" className="form-control" placeholder="Diploma"  onChange={e => {handleOnDocuInfoChange(e) ; setDiploma(e.target.value)}} />
                                   
                            </div>
                            </div>

                            <div className="col-md-12 mt-4">
                            <label style={labels}>English Proficiency Certificate</label>
                            { englishCert != "" && 
                            <div className="input-group">
                            <p className="form-control text-start " style={formControl} > {englishCert}</p>
                                <div className="input-group-append mt-1 ">
                                    <span className="input-group-text m-1 p-1 " onClick = { e => setEnglishCert("")}><BsFillTrash2Fill/></span>
                                </div>  
                            </div>
                        }
                            <div className="input-group"> 
                            <input name="english_Cert" type="file" className="form-control" placeholder="English Proficiency Certificate" onChange={e => {handleOnDocuInfoChange(e) ; setEnglishCert(e.target.value)}}  />
                            
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                </div>
                <div className="mt-1 text-center align-items-center"><button className="btn btn-primary "  style={profileButton} type="submit" >Save Profile</button></div>
              </form>          
            </div>
            : 
            <div className="d-flex flex-column justify-content-center align-items-center h-100" style={{fontStyle: 'italic', fontWeight: 'bold'}}> 
            <p> If you haven't filled out the application form, please go to the application page and fill out the form. ⤵️ </p>
            <button className="routingButtons" > <Link to="/form/personalInfo" > Application Page </Link></button>
            </div>
        }
                    </>
                );

}
export default Profile;