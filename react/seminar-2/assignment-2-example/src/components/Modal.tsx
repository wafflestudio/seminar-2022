import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./Modal.css";

type ModalState = "open" | "closed" | "closing";

export function useModal(afterClosed = () => {}) {
  const [state, setState] = useState<ModalState>("closed");
  const openModal = useCallback(() => {
    setState("open");
  }, []);
  const timeoutId = useRef<number>();
  const closeModal = useCallback(() => {
    setState("closing");
    timeoutId.current = window.setTimeout(() => {
      setState("closed");
      afterClosed();
    }, 300);
  }, [afterClosed]);
  // clean up timeout on unmount
  useEffect(() => () => window.clearTimeout(timeoutId.current), []);
  return useMemo(
    () => ({
      state,
      openModal,
      closeModal,
    }),
    [closeModal, openModal, state]
  );
}

interface ModalProps {
  handle: ReturnType<
    (afterClosed?: () => void) => {
      openModal: () => void;
      closeModal: () => void;
      state: "open" | "closed" | "closing";
    }
  >;
  children: any;
  onBackgroundClicked?: () => void;
}

export function Modal({ children, handle, onBackgroundClicked }: ModalProps) {
  return handle.state !== "closed" ? (
    <div
      className={`modal-container ${handle.state}`}
      onClick={onBackgroundClicked ?? handle.closeModal}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
}
