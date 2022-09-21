import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MenuList from "./components/MenuList";
import addIcon from "./resources/add-icon.svg";

import initialData from "./data.json";
import MenuDetails from "./components/MenuDetails";
import {
  MODAL_ADD,
  MODAL_DELETE,
  MODAL_EDIT,
  MODAL_NONE,
} from "./lib/modalTypes";
import AddModal from "./components/AddModal";
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";

function App() {
  const [nextId, setNextId] = useState(100);
  const [menus, setMenus] = useState(initialData);

  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(MODAL_NONE);
  const [modalClosing, setModalClosing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const selectedMenu = menus.find((menu) => menu.id === selectedId) ?? null;
  const filteredMenus = menus.filter((menu) => menu.name.search(search) !== -1);

  function validateMenu(menu, id) {
    if (menu.price < 10 || menu.price > 100000)
      return "가격은 10 ~ 100000 사이의 값을 입력하세요";

    if (menu.price % 10 !== 0) return "가격은 10원 단위로 입력하세요";

    // id를 제외한 메뉴 중 menu.name이 존재
    if (menus.some((item) => item.id !== id && item.name === menu.name))
      return "같은 이름의 메뉴가 존재합니다";
  }

  function addMenuAndSelect(newMenu) {
    const addedMenu = { ...newMenu, id: nextId };
    setMenus([...menus, addedMenu]);
    setSelectedId(addedMenu.id);
    setNextId(nextId + 1);
  }

  function updateMenu(editedMenu) {
    const newMenus = menus.map((menu) =>
      menu.id === selectedId ? { ...editedMenu, id: selectedId } : menu
    );
    setMenus(newMenus);
  }

  function deleteMenu() {
    setMenus(menus.filter((menu) => menu.id !== selectedId));
  }

  function closeModal() {
    setModalClosing(true);
    setTimeout(() => {
      setModal(MODAL_NONE);
      setModalClosing(false);
    }, 300);
  }

  return (
    <>
      <div className="app">
        <Header />
        <div className={`container ${selectedId !== null ? "selected" : ""}`}>
          <div className="search-wrapper">
            <SearchBar search={search} setSearch={setSearch} />
          </div>
          <div className="list-wrapper">
            <MenuList
              menus={filteredMenus}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
            />
            <button
              className="open-add-modal"
              onClick={() => setModal(MODAL_ADD)}
            >
              <img src={addIcon} alt="새 메뉴" />
            </button>
          </div>
          {selectedMenu && (
            <div className="details-wrapper">
              <MenuDetails
                menu={selectedMenu}
                setModal={setModal}
                handleCloseDetail={() => setSelectedId(null)}
              />
            </div>
          )}
        </div>
      </div>
      {modal !== MODAL_NONE && (
        <div
          className={`modal-container ${modalClosing ? "closing" : ""}`}
          onClick={() => {
            closeModal();
          }}
        >
          {modal === MODAL_ADD ? (
            <AddModal
              validateMenu={(menu) => validateMenu(menu, null)}
              handleAddMenu={addMenuAndSelect}
              handleCloseModal={closeModal}
            />
          ) : modal === MODAL_EDIT ? (
            <EditModal
              validateMenu={(menu) => validateMenu(menu, selectedId)}
              handleUpdateMenu={updateMenu}
              handleCloseModal={closeModal}
              initialData={selectedMenu}
            />
          ) : modal === MODAL_DELETE ? (
            <DeleteModal
              handleDeleteMenu={() => {
                deleteMenu();
                setSelectedId(null);
              }}
              handleCloseModal={closeModal}
            />
          ) : null}
        </div>
      )}
    </>
  );
}

export default App;
