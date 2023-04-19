import React from "react";
import "./Admin.css";
import { useState } from "react";


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


    //รับค่า index ที่map มาเเต่ละตัว จะได้ลบได้
    const deleteData = (index) => {
        const newEmployees = [...props.employee];
        newEmployees.splice(index, 1);
        props.setEmployee(newEmployees);
    };

    const ClearAll = () => {
        props.setEmployee([]);
    }

    return (
        <>
        <label>Create User Here</label>
            <div className="Info">
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
                <button className="ADD" onClick={createUser}>Add</button>
            </div>
            <table> 
                <tr>
                    <th>Names</th>
                    <th>Last name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {props.employee.map((item,index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                            <td><button className="DleEACH" onClick={()=> deleteData(index)}>Delete</button></td> 
                        </tr>
                    )
                }   
             )}       
            </table>
            <button className="dleALL" onClick={ClearAll}>Clear All Data</button>
        </>
    

)}
export default Admin;