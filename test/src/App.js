import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllEmployees, postNewEmployee } from './services/dummyServices';
import { Employees } from './Employees';
import { Select } from './Select';

function App() {
  const [employees,setEmployee] = useState([]);
  const [inputRadnik, setRadnik] = useState('');
  const [inputPlata, setPlata] = useState('');
  const [niz, setNiz] = useState ([]);

  useEffect(()=> {
    getAllEmployees().then(data => {
      setEmployee(data)
      setNiz(data)
    })
  },[])

  const handleChange = (e) => {
    let selected = e.target.value;
    if(selected === "all"){
      setEmployee(niz)
    }else{
    let filtered = niz.filter(el => el.value === selected);
    setEmployee(filtered);
  }}
  const handleSubmit = (e) =>{
    e.preventDefault()
    if (inputRadnik === '' || inputPlata === ''){
      console.warn('Ne moze prazno.')
    }else{
    }
    postNewEmployee(inputRadnik, inputPlata).then(res => console.log(res))
  }

  const handleIme = (e) => {
    setRadnik(e.target.value)
  }
  const handlePlata = (e) => {
    setPlata(e.target.value)

  }

  return (
    <>
    <form onSubmit={(e)=>(handleSubmit(e))}>
    <input type="text" onChange={e=>(handleIme(e))} placeholder="Ime i Prezime"/>
    <input type="text" onChange={e=>(handlePlata(e))} placeholder="Plata"/>
    <input type="submit" value="Ucitaj"/>
   </form>
   <div>
   <Select handleChange={handleChange} />
   </div>
    <div>
      <Employees employees={employees} value0="all"/>
    </div>
    </>
  );
}

export default App;
