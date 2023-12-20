import React, { useState } from 'react';
import './App.css';
import Display from './Display';


function App() {
  let max = 10
  let [count, setcount] = useState(0)
  let addCount = () => { setcount(count + 1) }
  let resetCount = () => { setcount(0) }
  return (
    <div className="App">
      <Display count={count} max={max} addCount={addCount} resetCount={resetCount} />
    </div>
  );
}
export default App;
