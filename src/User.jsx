import React from "react";

function User (props) {
    return (
        <>
            <table>
                <tr>
                    <th>Names</th>
                    <th>Last name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {props.employee.map((item) =>{
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.lastName}</td>
                            <td>{item.position}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default User 