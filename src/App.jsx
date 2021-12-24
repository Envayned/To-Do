
import { useState } from 'react';
import './App.css';
import Another from "./Another";
import Clock from "./Clock";

function App() {
  const [count, setCount] = useState(0);

  const increment = () =>{
    return setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    return setCount(prevCount => prevCount - 1)
  }
  
  return (
    <div className="App">
      <Another name="Hadi"/>
      <Clock />
      <div>
        <p> The count is {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <p>hello world</p>
    </div>
  );
}

export default App; 
