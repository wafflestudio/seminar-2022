import styles from "./ButtonContainer.module.css";
import { PropsWithChildren } from "react";

type ButtonContainerProps = PropsWithChildren;

export function ButtonContainer({ children }: ButtonContainerProps) {
  return <div className={styles["button-container"]}>{children}</div>;
}
