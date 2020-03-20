import React,{ useState } from 'react';
import './App.css';

const App = () => {
  const [users,setUsers] = useState([])
  const [filterUsers,setFilterUsers] = useState([])
  const [name,setName] = useState('')
  const [number,setNumber] = useState('')
  const replace = (index) => {
    let niz = [...users]
    niz[index].number = number
    setUsers(niz)
    setFilterUsers(niz)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!(name === '' || number === '' || !number.startsWith('+'))){
      let index = users.findIndex((user) => user.name === name)
      if(index !== -1){
        if(window.confirm('Korisnik sa ovim imenom postoji. Da li zelite da mu promenite broj?')){
          replace(index)
        }
      }
      else{
        setUsers([...users,{name,number}])
        setFilterUsers([...users,{name,number}])
      }
    }
    else{
      console.warn('Ovo polje ne moze biti prazno!');
    }
    e.target.reset();  
  }
  const filterisano = (e) => {
  let filtrirano = users.filter(el => el.name.includes(e.target.value));   
  setFilterUsers(filtrirano)
  }
  return (
    <>
    <div className="block">
    <form onSubmit={(e) => handleSubmit(e)}>
      <input type="text" onInput={(e) => setName(e.target.value)} placeholder="Ime i Prezime"/>
      <input type="text" onInput={(e) => setNumber(e.target.value)} placeholder="Broj telefona"/>
      <input type="submit"/>
    </form>
    <input type="text" onInput={(e) => filterisano(e)} placeholder="Pretrazi"/>
    <ul>
      {filterUsers.map(x => <li key={x.name}>{x.name} - {x.number}</li>)}
    </ul>
    </div>
    </>
  );
}
export default App;