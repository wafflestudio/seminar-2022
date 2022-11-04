import MenuItem from "./MenuItem";
import "./MenuList.css";
import { Menu } from "../../lib/types";

interface MenuListProps {
  menus: Menu[];
  selectedId: number | null;
  setSelectedId(value: number | null): void;
}

const MenuList = ({ menus, selectedId, setSelectedId }: MenuListProps) => (
  <ul className="menu-list">
    <li className="list-header">
      <div>ID</div>
      <div>이름</div>
      <div>종류</div>
      <div>가격</div>
    </li>
    {menus.map((menu) => (
      <MenuItem
        key={menu.id}
        menu={menu}
        handleSelect={() =>
          setSelectedId(selectedId === menu.id ? null : menu.id)
        }
        selected={selectedId === menu.id}
      />
    ))}
  </ul>
);
export default MenuList;
