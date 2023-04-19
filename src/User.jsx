import React from "react";

function User (props) {
    return (
        <>
            <table>
                <tr>
                    <th>Names</th>
                    <th>Last name</th>
                    <th>Position</th>
                </tr>
                {props.employee.map((item) =>{
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.lastname}</td>
                            <td>{item.position}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default User 