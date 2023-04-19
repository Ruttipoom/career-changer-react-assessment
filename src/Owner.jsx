import React from "react";
import Layout from "./Layout";
import "./Owner.css";

function Owner(){
    return(
        <Layout>  
            <div>
                <div className="OwnerINFO">  
                    <h1>Ruttipoom-ProjectH-38</h1>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/de1bbf90617233.5e1c78d58d809.jpg" />
                    <p>Short Biography:</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>            
                </div>
            </div>
        </Layout>
    )
}

export default Owner;