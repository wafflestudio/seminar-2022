import "./App.css";
import { useState } from "react";

const list_abcd = [
  { name: "A", id: 0 },
  { name: "B", id: 1 },
  { name: "C", id: 2 },
  { name: "D", id: 3 },
]

const list_abzcd = [
  { name: "A", id: 0 },
  { name: "B", id: 1 },
  { name: "Z", id: 99 },
  { name: "C", id: 2 },
  { name: "D", id: 3 },
];

const list_bzcd = [
  { name: "B", id: 1 },
  { name: "Z", id: 99 },
  { name: "C", id: 2 },
  { name: "D", id: 3 },
];

function App() {
  const [list, setList] = useState(list_abcd);

  return (
    <>
      개발자 도구에서 <code>li</code> 요소가 업데이트되는 모습을 확인할 수 있습니다.
      <h2>Without Key</h2>
      <ul>
        {list.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <h2>With Key</h2>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => setList(list_abcd)}>[A,B,C,D]</button>
      <button onClick={() => setList(list_abzcd)}>[A,B,Z,C,D]</button>
      <button onClick={() => setList(list_bzcd)}>[B,Z,C,D]</button>
    </>
  );
}

export default App;
