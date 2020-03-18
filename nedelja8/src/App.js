import React from 'react';
import './App.css';
import Form from './Form';
import data from './data'

class App extends React.Component {

  render(){
  return (
    <div>
  <Form contacts={data}/>
  </div>
  );
 }
}
export default App;
