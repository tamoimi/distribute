import './App.css';
import { useState } from 'react';

function App() {

const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>

        <div>
          <button data-testid="plus-button"
          onClick={()=> setCount((count)=> count + 1)}>+</button>
          <button data-testid="minus-button"
          onClick={()=> setCount((count)=> count - 1)}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
