import React from "react";
import Table from 'react-bootstrap/Table'

function Profiles(props){
   return(
       <div className="tablebox"> 
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Profile Image</th>
                    <th>Name<span onClick={props.sortEmployeesAsc}>&#8595;</span> <span onClick={props.sortEmployeesDes}>&#8593;</span></th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Email</th>
                    
                </tr>
            </thead>
            {props.employees.map((employee, index) => (
               <tbody key={index}>
                   <tr>
                       <td> <img src={employee.picture.large} alt={employee.name.first}/> </td>
                       <td>{employee.name.last}, {employee.name.first}</td>
                       <td>{employee.location.city}, {employee.location.country}</td>
                       <td>{employee.phone}</td>
                       <td>{employee.email}</td>
                   </tr>
               </tbody> 
            ))}
        </Table>

       </div>
   )

}

export default Profiles;