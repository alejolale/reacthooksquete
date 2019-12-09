import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleChange = (e) => {
    const input = e.target;
    let text = input.value;
    
    //creation d'une expression reguliere
    var regex = RegExp('^[0-9]*$');
    if (!regex.test(text)) {
      console.log("character non valide !");
      return;
    }
    setCount(Number(input.value));
  }
  return (
    <div className="App">
      <h2>Counter value is: {count}</h2>

      <input type="text" value={count} onChange={handleChange}/>

      <br />
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
