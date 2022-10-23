import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export enum MenuType {
  waffle = "waffle",
  beverage = "beverage",
  coffee = "coffee",
  dessert = "dessert",
}

function never(x: never): never {
  throw new Error("Missing case: " + x);
}

export function displayType(type: MenuType) {
  switch (type) {
    case MenuType.waffle:
      return "와플";
    case MenuType.beverage:
      return "음료";
    case MenuType.coffee:
      return "커피";
    case MenuType.dessert:
      return "디저트";
    default:
      return never(type);
  }
}

export type Menu = {
  id: number;
  name: string;
  type: MenuType;
  price: number;
  image?: string;
  description?: string;
};
export type MenuUpdateInput = {
  price: number;
  image?: string;
  description?: string;
};
export type MenuCreateInput = Pick<
  Menu,
  "name" | "type" | "price" | "image" | "description"
>;
type InputWithLabelArgsBase<T, N extends keyof T> = {
  value: T;
  label: string;
  name: N;
  setValue: (value: T) => void;
} & (T[N] extends string
  ? {
      propToString?: (prop: T[N]) => string;
    }
  : {
      propToString: (prop: T[N]) => string;
    }) &
  (T[N] extends string
    ? {
        stringToProp?: (prop: string) => T[N];
      }
    : {
        stringToProp: (prop: string) => T[N];
      });
export type InputWithLabelProps<T, N extends keyof T> = (
  | (Omit<
      InputHTMLAttributes<HTMLInputElement>,
      keyof InputWithLabelArgsBase<T, N>
    > & { textarea?: false; suffix?: string })
  | (Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      keyof InputWithLabelArgsBase<T, N>
    > & { textarea: true; suffix?: never })
) &
  InputWithLabelArgsBase<T, N>;
