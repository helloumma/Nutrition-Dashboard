import { SearchResult } from "@/libs/search/types";

export async function useNutrientsData(query: any, meal: any) {
  try {
    const response = await fetch(
      `https://trackapi.nutritionix.com/v2/natural/nutrients`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers":
            "X-Requested-With, content-type, Authorization",
          "x-app-id": `${process.env.ID}`,
          "x-app-key": `${process.env.API_KEY}`,
        },
        body: JSON.stringify({ query }),
      }
    );
    const data = await response.json();
    const newItem = {
      meal,
      name: data.foods.food_name,
      nutrients: data.foods,
    };
    const searchItems: SearchResult[] = [newItem];
    return { searchItems };
  } catch (err) {
    console.log(err);
    throw err;
  }
}
