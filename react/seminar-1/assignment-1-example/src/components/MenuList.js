import MenuItem from "./MenuItem";
import "./MenuList.css";

export default function MenuList({ menus, selectedId, setSelectedId }) {
  return (
    <ul className="menu-list">
      <li className="list-header">
        <div>ID</div>
        <div>이름</div>
        <div>가격</div>
      </li>
      {menus.map((menu) => (
        <MenuItem
          key={menu.id}
          menu={menu}
          handleSelect={() => setSelectedId(menu.id)}
          selected={selectedId === menu.id}
        />
      ))}
    </ul>
  );
}
