import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { SearchTerm, SearchResult, SearchResponse } from "@/types/types";

export const useNutrientsMutation = (): UseMutationResult<
  SearchResponse,
  Error,
  SearchTerm,
  unknown
> =>
  useMutation<SearchResponse, Error, SearchTerm>(async ({ query, meal }) => {
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

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const newItem = {
      meal, // Replace with the appropriate value
      name: data.foods.food_name,
      nutrients: data.foods,
    };
    const searchItems: SearchResult[] = [newItem];
    return { searchItems };
  });
/*const onSubmitAC = async (searchTerm: string) => {
  setValue(searchTerm);
  try {
    const response = await fetch(
      `https://trackapi.nutritionix.com/v2/natural/nutrients`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-app-id": `${process.env.ID}`,
          "x-app-key": `${process.env.API_KEY}`,
        },
        body: JSON.stringify({ query: value }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      setNutrients(data.foods);
      const newItem = {
        meal,
        name: data.foods.food_name,
        nutrients: data.foods, // Use the updated nutrients state
      };
      setSearchItems((prevItems) => [...prevItems, newItem]);
      setValue("");
    } else {
      console.error("Error fetching nutrients data:", response);
    }
  } catch (error) {
    console.error("Error fetching nutrients data:", error);
  }
};*/

/*const { data: nutrientData } = useQuery<search>({
  queryKey: ["search"],
  queryFn: onSubmitAC,
});
console.log("query", nutrientData);*/
