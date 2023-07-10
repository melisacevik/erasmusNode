import { Outlet } from "react-router-dom";

function form(){

    return(
        <> 
        <div className="form d-flex justify-content-center"> 
        
        <Outlet />
        </div>
        </>
    )


};

export default form;