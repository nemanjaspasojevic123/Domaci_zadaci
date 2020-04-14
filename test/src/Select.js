import React, { useState, useEffect } from 'react';
import { Employee } from "./Employee";
import { getAllEmployees } from './services/dummyServices';

export const Select = () => {

    const [employees, setEmployess] = useState([]);
    const [perPage, setPerPage] = useState(6);
    const [page, setPage] = useState(0);

    const numPages = () => (employees.length - 1) / perPage;
    const Pages = numPages => {
        let pages = [];
        for (let i = 0; i < numPages; i++) {
            pages.push(i);
        }
        return pages;
    }

    useEffect(() => {
        getAllEmployees().then(res => setEmployess(res))
    }, []);


    return(
        <>
        <div>
        <select onChange={e => setPerPage(e.target.value)}>
            <option value="6">6</option>
            <option value="12">12</option>
            <option value="24">24</option>
        </select>  
        </div>
        <div>
            {employees.slice(page * perPage, (page + 1)* perPage).map(employee => (
                <Employee employee={employee} key={employee} />
            ))}
        </div>
        <div>
            {Pages(numPages()).map(page => 
                <button onClick = {() => setPage(page)}>{page + 1}</button>
            )}
        </div>
        </>
    )
}