import { FormHTMLAttributes, useId } from "react";
import styles from "./Form.module.css";
import { InputWithLabelProps } from "../lib/types";

export function Form({
  children,
  className,
  onSubmit,
  ...rest
}: FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form
      className={`${className} ${styles["form"]}`}
      onSubmit={onSubmit ?? ((e) => e.preventDefault())}
      {...rest}
    >
      {children}
    </form>
  );
}

interface StaticFieldProps {
  value: string;
  label: string;
}

export function StaticField({ value, label }: StaticFieldProps) {
  return (
    <>
      <label>{label}</label>
      <input value={value} disabled />
    </>
  );
}

export function InputWithLabel<T, N extends keyof T>({
  value,
  label,
  name,
  setValue,
  propToString,
  stringToProp,
  textarea,
  suffix,
  ...rest
}: InputWithLabelProps<T, N>) {
  const pts = propToString ?? ((x: string) => x);
  const stp = stringToProp ?? ((x: string) => x);
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{label}</label>
      {textarea ? (
        <textarea
          id={id}
          onChange={(e) => {
            setValue({ ...value, [name]: stp(e.target.value) });
          }}
          value={pts(value[name])}
          {...rest}
        />
      ) : (
        <div className={styles["suffix-container"]}>
          <input
            id={id}
            onChange={(e) => {
              setValue({ ...value, [name]: stp(e.target.value) });
            }}
            value={pts(value[name])}
            {...rest}
          />
          <span className={styles["suffix"]}>{suffix}</span>
        </div>
      )}
    </>
  );
}
