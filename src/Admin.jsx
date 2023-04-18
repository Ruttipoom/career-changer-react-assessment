import React from "react";
import Layout from "./Layout";
import { useState,useEffect } from "react";

function Admin (props){
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [position, setPosition] = useState('')
    
    const createUser = () => {
    if(name !== '' && lastname !== '' && position !=='') {
        const newEmployee = {
            name: name,
            lastname: lastname,
            position: position
            }
            props.setEmployee([...props.employee, newEmployee])
        }
    }   


    return (
        <>
            <div>
                <label>Create User Here</label>
                <br />
                <input 
                type="text" 
                onChange={(event) => {setName(event.target.value)}} 
                value={name}
                placeholder="Name"
                />
                <input 
                type="text" 
                onChange={(event) => {setLastname(event.target.value)}} 
                value={lastname}
                placeholder="Last name"
                />
                <input 
                type="text" 
                onChange={(event) => {setPosition(event.target.value)}} 
                value={position}
                placeholder="Position"
                />
                <button onClick={createUser}>Add</button>
            </div>
            <table>
                <tr>
                    <th>Names</th>
                    <th>Last name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {props.employee.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <tr>{item.position}</tr>
                            <td><button>Delete</button></td>
                        </tr>
                    )
                }   
             )}       
            </table>
        </>
    

)}
export default Admin;