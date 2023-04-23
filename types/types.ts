// chart
export interface props {
  data: any;
  overall?: boolean;
}

// overall
export interface props {
  data: any;
}

// breakfast
export interface props {
  searchItems: { nutrients: any; name: string }[] | null;
  nurtrients: any;
  diet: string;
}

// breakfast chart
export interface props {
  data: any;
  diet: string;
}

// dinner
export interface props {
  searchItems: { nutrients: any; name: string }[] | null;
  nurtrients: any;
  diet: string;
}

// dinner chart
export interface props {
  data: any;
  diet: string;
}

// lunch
export interface props {
  searchItems: { nutrients: any; name: string }[];
  nurtrients: any;
  diet: string;
}

// lunch chart
export interface props {
  data: any;
  diet: string;
}

// auto complete
export interface props {
  onChangeAC: any;
  dataAC: any;
  onSubmitAC: any;
  valueAC: any;
}

// meal type
export interface props {
  breakfast?: MouseEventHandler<HTMLButtonElement>;
  lunch?: MouseEventHandler<HTMLButtonElement>;
  dinner?: MouseEventHandler<HTMLButtonElement>;
}

// search item

export interface props {
  nutrients: any;
}
