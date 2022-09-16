import "./App.css";
import { useState } from "react";
import MyComponent from "./MyComponent";

function App() {
  console.log("App render");
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="App">
      <label>
        보이기/안보이기:
        <input
          type="checkbox"
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
        />
      </label>
      {isVisible && <MyComponent />}
    </div>
  );
}

export default App;
