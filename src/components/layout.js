import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const outletStyle = {
    width: "100%", 
    height: "100vh", 
    overflowY: "scroll" //opposite: hidden 
}

function layout(){

    return(
        <div className="d-flex">
            <Sidebar />
            <div style={outletStyle}>
                <Outlet />
            </div>
        </div>
    );


}

export default layout;