import { formatPrice } from "../lib/formatting";
import "./MenuItem.css";

export default function MenuItem({ menu, selected, handleSelect }) {
  const formattedPrice = formatPrice(menu.price);
  return (
    <li
      className={`menu-item ${selected ? "selected" : ""}`}
      onClick={handleSelect}
    >
      <div>{menu.id}</div>
      <div>{menu.name}</div>
      <div>{formattedPrice}</div>
    </li>
  );
}
