
import { useState } from 'react';
import './App.css';
import Another from "./Another";

function App() {
  const [count, setCount] = useState(0);

  const increment = () =>{
    return setCount(prevCount => prevCount + 1)
  }

  const decrement = () => {
    return setCount(prevCount => prevCount - 1)
  }
     // styling in JSX requires camel casing vs the usual font-size you'd see in vanilla CSS
  const someStyle = {
    background: 'blue',
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <Another name="Hadi"/>
      <div>
        <p> The count is {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <p>hello world, well this works</p>
    {true &&
      <p> {5 + 2}</p>
    }
    </div>
  );
}

export default App; 
