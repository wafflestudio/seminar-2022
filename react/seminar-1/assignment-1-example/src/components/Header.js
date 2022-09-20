import waffleLogo from "../resources/waffle-logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <a href="https://wafflestudio.com">
        <img src={waffleLogo} alt="와플스튜디오 로고" />
      </a>
      <a href="https://wafflestudio.com">
        <h1>와플스튜디오 메뉴 관리</h1>
      </a>
    </header>
  );
}
