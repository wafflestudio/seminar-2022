import "./Header.css";

const Header = ({ todoCount }) => {
  return (
    <header className="header">
      <h1>2022년 9월 2일</h1>
      <h2>금요일</h2>
      <div className="todo-count">할 일 {todoCount}개 남음</div>
    </header>
  );
};

export default Header;
