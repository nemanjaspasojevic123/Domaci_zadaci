import React from 'react'


export const Employee = ({employee}) => {
let {id, employee_name, employee_salary, employee_age, profile_image} = employee;

return(
    <div>
    <p>{id}</p>
    <p>{employee_name}</p>
    <p>{employee_salary}</p>
    <p>{employee_age}</p>
    <p>{profile_image}</p>
    <hr />
</div>
)
}