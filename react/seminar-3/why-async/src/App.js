import {useState} from "react";

function App() {
  const [display, setDisplay] = useState([]);
  const [coin, setCoin] = useState("H");

  function heavyTask() {
    function fib(n) {
      if (n <= 2) return 1;
      else return fib(n - 1) + fib(n - 2);
    }

    setDisplay((display) => [...display, fib(39 + Math.random() * 5)]);
  }

  function flip() {
    setCoin((coin) => coin + (Math.random() < 0.5 ? "H" : "T"));
  }

  return (
    <div style={{ display: "flex" }}>
      <p style={{border: "1px solid", background: "#eee", margin: "5px", flex: "1"}}>
        <button onClick={() => heavyTask()}>do something heavy</button><br/>
        my favorite numbers:
        <ul>
          {display.map(x => <li>{x}</li>)}
        </ul>
      </p>
      <p style={{border: "1px solid", background: "#eee", margin: "5px", flex: "1"}}>
        <button onClick={() => flip()}>flip</button><br/>
        coin: {coin}
      </p>
    </div>
  );
}

export default App;
