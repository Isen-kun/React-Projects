import React, { useState } from "react";
import Tweet from "./Tweet";

function App() {
  const [users, SetUsers] = useState([
    { name: "Isen", message: "Hi" },
    { name: "Kun", message: "Hello" },
    { name: "Tron", message: "Bonjour" },
  ]);

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}

      {/* <h1 className={isRed ? "red" : ""}>Change my colour!</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1> */}

      {/* <Tweet name="Isen" message="This is a random tweet 1" likes="100" />
      <Tweet name="Tron" message="This is a random tweet 2" likes="1000" /> */}
    </div>
  );
}

export default App;
