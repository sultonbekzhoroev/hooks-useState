import { useState } from "react";
import "./App.css";

function App() {
  // when we use the hooks the first parameter is variable and the second is function in array
  const [counter, setCounter] = useState(0);
  const [history, setHistory] = useState([]);
  const addOne = () => {
    setCounter((previusState) => {
      setHistory([previusState]);
      return previusState + 1;
    });
  };

  const removeOne = () => {
    setCounter((previusState) => previusState - 1);
  };
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => addOne()}>Add one</button>
      <button onClick={() => removeOne()}>remove one</button>
    </div>
  );
}

export default App;
