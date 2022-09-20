import searchIcon from "../resources/search-icon.svg";
import "./SearchBar.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <label>이름 검색:</label>
      <div className="input-container">
        <input
          placeholder="검색어 입력"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={searchIcon} alt="" />
      </div>
    </div>
  );
}
