function home(){

const BLUE_COLOR = "#495d69";

const headStyle={

    fontStyle: "italic",
    color: BLUE_COLOR,
    fontFamily: "Poppins"
}

    return(
        <>
            
            <div className="row">
            <div className="col-10 d-flex flex-column p-5 mt-5 mx-auto">
            <h1 className="mt-3 mb-5">  Senate Decisions Concerning the Spring Semester of 2022-23 </h1>
            <ol className="text-start mt-2"> 
            <li> In line with the decisions of the Council of Higher Education due to the earthquake that occurred on February 6, 2023 affecting at least 10 provinces in our country, our Senate has made the following decisions concerning the Spring Semester of 2022-23 </li>
            <br />
            <li> The courses for the spring semester will resume online on February 27, 2023, Monday. The theoretical parts of the courses and the assessments & evaluations for these parts will take place through distance education. </li>
            <br/>
            <li> The dates and methods concerning the practical parts of the courses as well as the mid-term and final exams will be identified and announced in line with the respective decisions of the Council of Higher Education. </li>
            <br/>
            <li> The remaining subjects will be based on the methods available on the statement “Questions and Answers concerning Education during the Spring Semester of 2022-2023 at Higher Education Institutions” announced by the Council of Higher Education.</li>
            </ol>
            </div>
            </div>
        </>
    );
}
export default home;