import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import MenuList from "./MenuList";
import addIcon from "../../resources/add-icon.svg";
import MenuPreview from "./MenuPreview";
import { useMenuDataContext } from "../../contexts/MenuDataContext";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./index.module.css";
import { nanToNull } from "../../lib/formatting";
import { useSessionContext } from "../../contexts/SessionContext";

function MenuListPage() {
  const [search, setSearch] = useState("");
  const [searchParams, setParams] = useSearchParams();
  const selectedId = nanToNull(Number(searchParams.get("menu")));
  const { user } = useSessionContext();
  function setSelectedId(n: number | null) {
    if (n === null) setParams({});
    else setParams({ menu: n.toString() });
  }
  const { getMenuById, filterMenus } = useMenuDataContext();

  const selectedMenu = useMemo(
    () => (selectedId !== null ? getMenuById(selectedId) : null),
    [getMenuById, selectedId]
  );
  const filteredMenus = useMemo(
    () => filterMenus(search),
    [filterMenus, search]
  );

  return (
    <>
      <div
        className={`${styles["container"]} ${
          selectedMenu ? styles["selected"] : ""
        }`}
      >
        <div>
          <SearchBar search={search} setSearch={setSearch} />
        </div>
        <div className={styles["list-wrapper"]}>
          <MenuList
            menus={filteredMenus}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
          {user && (
            <Link to="/menus/new" className={styles["open-add-modal"]}>
              <img src={addIcon} alt="새 메뉴" />
            </Link>
          )}
        </div>
        <div
          className={`${styles["details-wrapper"]} ${
            selectedId ? "" : styles["closed"]
          }`}
        >
          <MenuPreview
            menu={selectedMenu}
            onClosePreview={() => {
              setSelectedId(null);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default MenuListPage;
