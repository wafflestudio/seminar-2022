import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMenuDataContext } from "../../contexts/MenuDataContext";
import {
  emptyToU,
  formatPrice,
  nanToNull,
  priceToNum,
  uToEmpty,
} from "../../lib/formatting";
import { displayType, MenuUpdateInput } from "../../lib/types";
import { ButtonContainer } from "../ButtonContainer";
import { Form, InputWithLabel, StaticField } from "../Form";
import styles from "./index.module.css";
import { useSessionContext } from "../../contexts/SessionContext";

type MenuEditForm =
  | (Omit<MenuUpdateInput, "price"> & { price: number | null })
  | null;

export default function MenuEditPage() {
  const params = useParams();
  const menuId = useMemo(() => nanToNull(Number(params.menuId)), [params]);
  const navigate = useNavigate();
  const { user } = useSessionContext();
  const { getMenuById, updateMenu } = useMenuDataContext();
  const oldMenu = useMemo(
    () => menuId && getMenuById(menuId),
    [getMenuById, menuId]
  );
  const dead = useRef(false);
  useEffect(() => {
    if (dead.current) return;
    if (!user) {
      alert("메뉴를 수정하려면 로그인하세요");
      navigate("/auth/login", { replace: true });
      dead.current = true;
    } else if (!oldMenu) {
      alert("존재하지 않는 메뉴입니다");
      navigate(`/stores/${user.id}`, { replace: true });
      dead.current = true;
    }
  }, [dead, navigate, oldMenu, user]);
  const [menu, setMenu] = useState<MenuEditForm>(null);
  useEffect(() => {
    menuId && setMenu(getMenuById(menuId));
  }, [getMenuById, menuId]);
  return menu && oldMenu ? (
    <div className={styles["container"]}>
      <Form className={styles["form"]}>
        <h2>메뉴 수정</h2>
        <StaticField value={oldMenu.name} label="이름" />
        <StaticField value={displayType(oldMenu.type)} label="종류" />
        <InputWithLabel
          value={menu}
          label="가격"
          name="price"
          setValue={setMenu}
          stringToProp={(s) => (s === "" ? null : priceToNum(s) ?? menu.price)}
          propToString={(p) => (p === null ? "" : formatPrice(p))}
          placeholder="5,000"
          suffix="원"
        />
        <InputWithLabel
          textarea
          value={menu}
          setValue={setMenu}
          label="설명"
          name="description"
          stringToProp={emptyToU}
          propToString={uToEmpty}
          placeholder="설명을 입력하세요"
        />
        <InputWithLabel
          value={menu}
          label="이미지"
          name="image"
          setValue={setMenu}
          stringToProp={emptyToU}
          propToString={uToEmpty}
          placeholder="https://example.com/foo.png"
        />
      </Form>
      <ButtonContainer>
        <button
          onClick={() => {
            const price = menu.price;
            if (price === null) {
              alert("invalid price");
              return;
            }
            updateMenu(oldMenu.id, { ...menu, price });
            navigate(`/menus/${oldMenu.id}`);
          }}
          className={styles["green"]}
        >
          저장
        </button>
        <Link to={`/menus/${oldMenu.id}`}>취소</Link>
      </ButtonContainer>
    </div>
  ) : (
    <div>메뉴가 존재하지 않습니다</div>
  );
}
