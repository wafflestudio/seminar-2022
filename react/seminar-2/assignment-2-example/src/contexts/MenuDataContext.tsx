import { createContext, useCallback, useContext, useState } from "react";
import initialData from "../data.json";
import { Menu, MenuCreateInput, MenuUpdateInput } from "../lib/types";

type MenuDataContextValue = {
  menus: Menu[];
  filterMenus(query: string): Menu[];
  getMenuById(id: number): Menu | null;
  addMenu(newMenu: MenuCreateInput): Menu;
  updateMenu(id: number, editedMenu: MenuUpdateInput): Menu;
  deleteMenu(id: number): void;
};

const MenuDataContext = createContext<MenuDataContextValue>({
  addMenu() {
    throw new Error("no context provider");
  },
  deleteMenu() {
    throw new Error("no context provider");
  },
  getMenuById() {
    throw new Error("no context provider");
  },
  updateMenu() {
    throw new Error("no context provider");
  },
  menus: [],
  filterMenus() {
    throw new Error("no context provider");
  },
});

export function MenuDataProvider({ children }: { children?: any }) {
  const [menus, setMenus] = useState<Menu[]>(initialData as Menu[]);
  const [nextId, setNextId] = useState(100);
  const getMenuById = useCallback(
    (id: number): Menu | null => menus.find((menu) => menu.id === id) ?? null,
    [menus]
  );

  const updateMenu = useCallback(
    (id: number, editedMenu: MenuUpdateInput): Menu => {
      const oldMenu = getMenuById(id);
      if (!oldMenu) throw new Error("존재하지 않는 메뉴입니다");
      const menuInstance = { ...oldMenu, ...editedMenu, id };
      setMenus(menus.map((old) => (old.id === id ? menuInstance : old)));
      return menuInstance;
    },
    [getMenuById, menus]
  );

  const filterMenus = useCallback(
    (query: string): Menu[] =>
      menus.filter((menu) => menu.name.includes(query)),
    [menus]
  );

  const deleteMenu = useCallback(
    (id: number): void => {
      if (menus.every((menu) => menu.id !== id))
        throw new Error("존재하지 않는 메뉴입니다");
      setMenus(menus.filter((menu) => menu.id !== id));
    },
    [menus]
  );

  const addMenu = useCallback(
    (newMenu: MenuCreateInput): Menu => {
      const errorMessage = validateMenu(newMenu, null);
      if (errorMessage) throw new Error(errorMessage);
      const menuInstance = { ...newMenu, id: nextId };
      setMenus([...menus, menuInstance]);
      setNextId(nextId + 1);
      return menuInstance;

      function validateMenu(menu: MenuCreateInput, id: number | null) {
        if (menu.name.trim() === "") return "이름을 입력하세요";
        if (menu.price < 10 || menu.price > 100000)
          return "가격은 10 ~ 100000 사이의 값을 입력하세요";

        if (menu.price % 10 !== 0) return "가격은 10원 단위로 입력하세요";

        // id를 제외한 메뉴 중 menu.name이 존재
        if (menus.some((item) => item.id !== id && item.name === menu.name))
          return "같은 이름의 메뉴가 존재합니다";
      }
    },
    [menus, nextId]
  );

  return (
    <MenuDataContext.Provider
      value={{
        updateMenu,
        addMenu,
        getMenuById,
        menus,
        filterMenus,
        deleteMenu,
      }}
    >
      {children}
    </MenuDataContext.Provider>
  );
}

export const useMenuDataContext = () => useContext(MenuDataContext);
