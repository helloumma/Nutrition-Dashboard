import { ChangeEventHandler, MouseEventHandler } from "react";

export interface autoComplete {
  onChangeAC: ChangeEventHandler<HTMLInputElement> | undefined;
  dataAC: any;
  onSubmitAC: MouseEventHandler<HTMLButtonElement> | undefined | any;
  valueAC: string;
  isLoading: any;
  error: any;
}

export type search = {
  meal: string;
  name: string;
  nutrients: any;
}[];

export type SearchTerm = {
  query: string;
  meal: string;
};

export type SearchResult = {
  meal: string;
  name: string;
  nutrients: any;
};

export type SearchResponse = {
  searchItems: SearchResult[];
};
