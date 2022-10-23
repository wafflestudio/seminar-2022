import { formatPrice } from "../../lib/formatting";
import styles from "./MenuItem.module.css";
import { displayType, Menu } from "../../lib/types";

interface MenuItemProps {
  menu: Menu;
  selected: boolean;
  handleSelect(): void;
}

const MenuItem = ({ menu, selected, handleSelect }: MenuItemProps) => {
  const formattedPrice = formatPrice(menu.price);
  return (
    <li
      className={`${styles["menu-item"]} ${selected ? styles["selected"] : ""}`}
      onClick={handleSelect}
    >
      <div>{menu.id}</div>
      <div>{menu.name}</div>
      <div>{displayType(menu.type)}</div>
      <div>{formattedPrice}</div>
    </li>
  );
};
export default MenuItem;
