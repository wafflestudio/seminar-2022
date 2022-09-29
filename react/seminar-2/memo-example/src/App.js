import "./App.css";
import {useCallback, useMemo, useState} from "react";


function App() {
  const [input, setInput] = useState(37);
  const [trivial, setTrivial] = useState(true);

  const fibonacci = useCallback(x => {
    if (x <= 2 || !x) return x;
    else return fibonacci(x - 1) + fibonacci(x - 2);
  }, []);
  const fib = useMemo(() => fibonacci(input), [input, fibonacci]);

  return (
    <div className="App">
      <label>trivial? <input type="checkbox" checked={trivial} onChange={(e) => setTrivial(e.target.checked)}/></label>
      <label>input = <input type="number" value={input} onChange={(e) => setInput(Number(e.target.value))}/></label>
      <span>fibonacci = {fib}</span>
    </div>
  );
}

export default App;
