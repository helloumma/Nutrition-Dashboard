import { getData } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

export const useFetchData = (value: string) => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://trackapi.nutritionix.com/v2/search/instant?query=${value}&common=true`,
        {
          headers: {
            "x-app-id": `${process.env.ID}`,
            "x-app-key": `${process.env.API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data.common;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return useQuery<getData[]>(["foods", value], fetchData, {
    onError: (error) => {
      console.log(error);
    },
  });
};
