import { useState } from "react";
import "./App.css";

function App() {
  const [stars, setStars] = useState(Array.from(Array(5).keys()));
  const [rate, setRate] = useState(localStorage.getItem("rate"));

  const handletClick = (index) => {
    localStorage.setItem("rate", index);
    setRate(index);
  };

  const remove = () => {
    localStorage.removeItem("rate");
    setRate(0);
  };
  return (
    <div className="App">
      <div className="star">
        {stars.map((star, index) => {
          return (
            <div
              style={{
                display: "inline-block",
                border: "1px solid black",
                padding: "20px",
              }}
              className={index <= rate ? "filled" : ""}
              onClick={() => handletClick(index)}
            >
              {index}
            </div>
          );
        })}
        <button onClick={() => remove()}>Remove from local</button>
        <h2>{rate}</h2>
      </div>
    </div>
  );
}

export default App;
