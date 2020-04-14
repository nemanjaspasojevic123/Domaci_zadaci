import React, { useState } from 'react';
import './App.css';
import { postNewEmployee } from './services/dummyServices';
import { Select } from './Select';

function App() {
  const [inputRadnik, setRadnik] = useState('');
  const [inputPlata, setPlata] = useState('');


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
   <Select />
   </div>
    </>
  );
}

export default App;
