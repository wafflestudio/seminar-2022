import { useState } from "react";
import { formatPrice, priceToNum } from "../lib/formatting";
import Modal from "./Modal";

export default function EditModal({
  handleUpdateMenu,
  handleCloseModal,
  validateMenu,
  initialData,
}) {
  const [name, setName] = useState(initialData.name);
  const [price, setPrice] = useState(formatPrice(initialData.price));
  const [image, setImage] = useState(initialData.image);
  return (
    <Modal>
      <div className="modal-title">메뉴 수정</div>
      <div className="modal-form">
        <label htmlFor="name">이름</label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">가격</label>
        <div className="input-container">
          <input
            id="price"
            value={price}
            onChange={(e) => setPrice(formatPrice(priceToNum(e.target.value)))}
          />
          <span className="input-suffix">원</span>
        </div>
        <label htmlFor="image">상품 이미지</label>
        <input
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div className="modal-button-container">
        <button
          className="green-button"
          onClick={() => {
            const menu = { name, price: priceToNum(price), image };
            const error = validateMenu(menu);
            if (error) alert(error);
            else {
              handleUpdateMenu(menu);
              handleCloseModal();
            }
          }}
        >
          저장
        </button>
        <button onClick={() => handleCloseModal()}>취소</button>
      </div>
    </Modal>
  );
}
