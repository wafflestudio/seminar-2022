import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import AddTodo from "./components/AddTodo";

function App() {
  // 새로운 id를 생성하기 위한 state
  const [maxId, setMaxId] = useState(100);

  // 모든 todo의 리스트
  const [todos, setTodos] = useState([
    { id: 1, status: "done", content: "아침 산책" },
    { id: 2, status: "done", content: "오늘의 뉴스 읽기" },
    { id: 3, status: "todo", content: "샌드위치 사 먹기" },
    { id: 4, status: "todo", content: "리액트 공부하기" },
  ]);

  // todo.id에 해당하는 놈을 수정
  const updateTodo = (todo) => {
    const index = todos.findIndex((elem) => elem.id === todo.id);
    const clone = todos.slice();
    clone.splice(index, 1, todo);
    setTodos(clone);
  };

  // content를 내용으로 갖는 새로운 todo 추가
  const addTodo = (content) => {
    const newTodos = [...todos, { id: maxId + 1, status: "todo", content }];
    setTodos(newTodos);
    setMaxId(maxId + 1);
  };

  return (
    <div className="app">
      <Header todoCount={999999} />
      <List todos={todos} updateTodo={updateTodo} />
      <AddTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
