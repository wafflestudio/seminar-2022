import searchIcon from "../../resources/search-icon.svg";
import styles from "./SearchBar.module.css";
import { useId } from "react";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  const id = useId();
  return (
    <div className={styles["search-bar"]}>
      <label htmlFor={id}>이름 검색:</label>
      <div className={styles["input-container"]}>
        <input
          id={id}
          placeholder="검색어 입력"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}
