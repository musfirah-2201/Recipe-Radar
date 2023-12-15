import React from "react";
import borderim from '../images/img5.jpg';
import './Border.css'

function Border(){
    return(
        <div className="app-container">
            <img src={borderim} alt="leftborder" className="border-image left"/>
            <img src={borderim} alt="rightborder" className="border-image right"/>
        </div>
    );
}
export default Border;