import React from "react";
import { useState } from "react";
import Layout from "./Layout";
import Admin from "./Admin";
import User from "./User";

const mockEmployees = [
  {
    id: 0,
    name: "Ribbon ",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
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
        <div>
          <button onClick={()=>setSector("user")}>Home User Sector</button>
          <button onClick={()=>setSector("admin")}>Home Admin Sector</button>
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
