import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import Admin from "./Admin";
import User from "./User";
import "./Home.css";

const mockEmployees = [
  {
    id: 0,
    name: "Ribbin ",
    lastname: 'MorningStar',
    position: "The carry of genMate"
  },
  {
    id: 1,
    name: "Mine",
    lastname: "Melody",
    position: "Support of the team members"
  },
  {
    id: 2,
    name: "Yeans",
    lastname: "Yogurt",
    position: "Free position player"
  },
]
const Home = () => {

const [employee, setEmployee] =useState([...mockEmployees])

const [sector,setSector] =useState("")


  return (
    <Layout>  
      <div>
        <h1>Generation Thailand</h1>
        {sector=== "user"? <h1>React - User Sector</h1> : sector === "admin" ? <h1>React - Admin Sector</h1> :<h1>React - Assessment</h1>}
        <div id="Sectorbtn">
          <button className="secbtn" onClick={()=>setSector("user")}>Home User Sector</button>
          <button className="secbtn" onClick={()=>setSector("admin")}>Home Admin Sector</button>
        </div>
        <div>
          {sector === "admin" && <Admin employee={employee} setEmployee={setEmployee}/>} 
         {sector === "user" && <User employee={employee}/>}   
        </div>
      </div>  
    </Layout>
  )
}

export default Home
