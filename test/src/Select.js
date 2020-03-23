import React from 'react'

export const Select = ({handleChange, value0, value1, value2, value3, value4}) => {
    return(
        <div>
         <select onChange={(e) => handleChange(e)}>
            <option value={value0}>All employees</option>
            <option value={value1}>6</option>
            <option value={value2}>12</option>
            <option value={value3}>18</option>
            <option value={value4}>24</option>     
         </select>   
        </div>
    )
}