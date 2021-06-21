import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyFunctionComponent from './MyFunctionComponent';
import List from './List';

//JSX - JS + XML/eXtension
//We are allowed to write HTML-like syntax
function App() {
  
  const alertDetails = (name, hobby) => alert(`APP: ${name}, your favorite hobby is ${hobby}`);

  return <div>
    <List title={"My Hobbies"}  name="Getaneh" hobbies={['Hamburgers', 'SheshBesh', 'Tennis', 'Yam', 'Sratim']} onHobbySelected={alertDetails} />
    <List title={"His Hobbies"} name="Sari" hobbies={[]} onHobbySelected={alertDetails} />
    <List title={"Her Hobbies"} name="Gilad" hobbies={['Netflix', 'Parpar Nechmad Binge', 'Marvell']} onHobbySelected={alertDetails} />
  </div>;
  //return React.createElement('h1', null, 'Ahalan Jama\'a!');
}

export default App;

export const what = (obj, k) =>
  k.split('.').reduce((o, x) =>
    o == undefined ? o : o[x]
  , obj);

