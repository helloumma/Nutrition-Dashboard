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

export interface overall {
  data: {
    nutrients: any;
  }[];
}
