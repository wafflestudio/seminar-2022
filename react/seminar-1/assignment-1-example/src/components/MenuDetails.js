import closeIcon from "../resources/close-icon.svg";
import imagePlaceholder from "../resources/image-placeholder.png";
import editIcon from "../resources/edit-icon.svg";
import deleteIcon from "../resources/delete-icon.svg";
import { formatPrice } from "../lib/formatting";
import { MODAL_DELETE, MODAL_EDIT } from "../lib/modalTypes";
import "./MenuDetails.css";

export default function MenuDetails({ menu, setModal, handleCloseDetail }) {
  const formattedPrice = formatPrice(menu.price);
  return (
    <div className="menu-details">
      <button className="close-button" onClick={handleCloseDetail}>
        <img src={closeIcon} alt="닫기" />
      </button>
      <div className="info-container">
        <img
          src={menu.image !== "" ? menu.image : imagePlaceholder}
          alt="상품 이미지"
        />
        <h3>{menu.name}</h3>
        <p>{formattedPrice}원</p>
        <div className="buttons-container">
          <button onClick={() => setModal(MODAL_EDIT)}>
            <img src={editIcon} alt="수정" />
          </button>
          <button onClick={() => setModal(MODAL_DELETE)}>
            <img src={deleteIcon} alt="삭제" />
          </button>
        </div>
      </div>
    </div>
  );
}
