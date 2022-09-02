import done from "../resources/done.svg";
import "./Item.css";

const Item = ({ todo, update }) => {
  const toggleStatus = () => {
    if (todo.status === "todo") update({ ...todo, status: "done" });
    else update({ ...todo, status: "todo" });
  };
  return (
    <li className={`todo-item ${todo.status}`}>
      <div className="icon-container" onClick={toggleStatus}>
        <img src={done} alt="" />
      </div>
      <div className="content">{todo.content}</div>
    </li>
  );
};

export default Item;
