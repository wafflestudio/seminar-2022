import "./Modal.css";

export default function Modal({ children }) {
  return (
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
}
