void function() {
  const newMenuForm = document.getElementById("new-menu-form");
  const helpButton = document.getElementById("help");

  newMenuForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newMenuInput = document.getElementById("new-menu");
    const newMenu = newMenuInput.value.trim();

    if (newMenu.length === 0 || newMenu.length > 10) {
      alert("메뉴 이름을 1 ~ 10자 이내로 입력하세요");
      return;
    }

    const newMenuItem = document.createElement("li");
    newMenuItem.className = "menu-item"
    newMenuItem.innerText = newMenu;

    const menuList = document.getElementById("menu-list");
    menuList.appendChild(newMenuItem)

    newMenuInput.value = "";
    menuList.scrollTo({ top: menuList.scrollHeight, behavior: "smooth" });
  });

  helpButton.addEventListener("click", () => {
    alert("메뉴 이름을 쓰고 '추가' 버튼을 눌러 메뉴를 추가하세요");
  });
}();

