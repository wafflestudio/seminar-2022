import { useState } from "react";
import add from "../resources/add.svg";
import "./AddTodo.css";

// 아래쪽에 있는 todo 추가하는 부분
const AddTodo = ({ addTodo }) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [newTodoContent, setNewTodoContent] = useState("");

  const toggleVisible = () => {
    setNewTodoContent("");
    setInputVisible(!inputVisible);
  }

  const onSubmit = () => {
    setInputVisible(false);
    addTodo(newTodoContent);
  }

  return (
    <div className="add-todo">
      <form
        className="new-todo-container"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          className="new-todo"
          placeholder="할 일을 입력 후, Enter 를 누르세요"
        />
        <input type="submit" hidden />
      </form>
      <button
        className="toggle"
        onClick={toggleVisible}
      >
        <img src={add} alt="" />
      </button>
    </div>
  );
};

export default AddTodo;
