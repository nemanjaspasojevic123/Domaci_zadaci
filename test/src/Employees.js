import React from 'react'
import { Employee } from './Employee'

export const Employees = ({employees}) => {
    return(
        <div>
            {employees.map(el => <Employee employee={el} key={el.id} />)}
        </div>
    )
}