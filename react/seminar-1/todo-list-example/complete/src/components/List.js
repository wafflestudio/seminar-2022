import Item from "./Item";
import "./List.css";

const List = ({ todos, updateTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} update={updateTodo} />
      ))}
    </ul>
  );
};

export default List;
