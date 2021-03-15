import React from "react";

function Profiles(props){
   return(
       <div>
        <table >
            <thead>
                <tr>
                    <th>Profile Image</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Email</th>
                    
                </tr>
            </thead>
            {props.employees.map((employee, index) => (
               <tbody key={index}>
                   <tr>
                       <td> <img src={employee.picture.large} alt={employee.name.first}/> </td>
                       <td>{employee.name.first} {employee.name.last}</td>
                       <td>{employee.location.city}, {employee.location.country}</td>
                       <td>{employee.phone}</td>
                       <td>{employee.email}</td>
                   </tr>
               </tbody> 
            ))}
        </table>

       </div>
   )

}

export default Profiles;