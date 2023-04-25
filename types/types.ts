import { ChangeEventHandler, MouseEventHandler } from "react";

export interface meal {
  searchItems: { nutrients: any; name: string }[] | null;
  diet: string;
}

export interface data {
  data: {
    nf_calories: number;
    nf_cholesterol: number;
    nf_dietary_fiber: number;
    nf_potassium: number;
    nf_protein: number;
    nf_saturated_fat: number;
    nf_sodium: number;
    nf_sugars: number;
    nf_total_carbohydrate: number;
    nf_total_fat: number;
  }[];
  key?: any;
  overall?: boolean;
}

// to do: use this to either create a generic or to go deeper with the Array<T> stuff
export type dataDetails = {
  food_name: string;
};

export interface mealType {
  breakfast?: MouseEventHandler<HTMLButtonElement>;
  lunch?: MouseEventHandler<HTMLButtonElement>;
  dinner?: MouseEventHandler<HTMLButtonElement>;
}

export interface autoComplete {
  onChangeAC: ChangeEventHandler<HTMLInputElement> | undefined;
  dataAC: any;
  onSubmitAC: MouseEventHandler<HTMLButtonElement> | undefined | any;
  valueAC: string;
  isLoading: any;
}

// fix this - might need to be changed, once duplicate calcs on nutrients has changed

export interface overall {
  data: {
    nutrients: any;
  }[];
}

export type search = {
  meal: string;
  name: string;
  nutrients: any;
}[];

export interface getData {
  common_type: null;
  food_name: string;
  locale: string;
  photo: {
    thumb: string;
  };
  tag_id: string;
  tag_name: string;
}

export interface ResponseData {
  common: getData[];
}

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
