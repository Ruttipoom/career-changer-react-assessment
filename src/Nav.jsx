import React from "react";
import "./Nav.css";

function Nav (){
    return(
        <>
            <ul>
                <li><a href={'/'}>Home</a></li>
                <li><a href={'/owner'}>Owner</a></li>
            </ul>
            <hr />
        </>
    )
}

export default Nav;