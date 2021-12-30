
import { useState } from 'react';
import './App.css';
import Another from "./Another";
import Clock from "./Clock";
import axios from 'axios';
import React from 'react';
import ClockComponent from './Clock';
import ApiFetch from './Api';

function App() {
  const [count, setCount] = useState(0);

  const increment = () =>{
    return setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    return setCount(prevCount => prevCount - 1)
  }
  

  return (
    <div className="App" >
      <Another name="Hadi"/>
      <ClockComponent />
      <div>
        <p> The count is {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <p>no im not done :')</p>
      <p>but hey the api stuff works now</p>
      <ApiFetch />
      <ApiFetch />
    </div>
  );
}

export default App; 
