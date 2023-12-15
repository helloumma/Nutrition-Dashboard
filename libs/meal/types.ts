import { MouseEventHandler } from "react";

export interface meal {
  searchItems: { nutrients: any; name: string }[] | null;
  title: string;
}

export interface mealType {
  breakfast?: MouseEventHandler<HTMLButtonElement>;
  lunch?: MouseEventHandler<HTMLButtonElement>;
  dinner?: MouseEventHandler<HTMLButtonElement>;
}
