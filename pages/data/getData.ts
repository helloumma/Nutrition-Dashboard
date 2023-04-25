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
      // display an error message to the user or retry the query
      throw error;
    }
  };

  return useQuery<getData[]>(["foods", value], fetchData, {
    onError: (error) => {
      console.log(error);
    },
  });
};

/*const fetchData = async (): Promise<getData> => {
  const data = await fetch(
    `https://trackapi.nutritionix.com/v2/search/instant?query=${value}&common=true&branded=true`,
    {
      headers: {
        "x-app-id": `${process.env.ID}`,
        "x-app-key": `${process.env.API_KEY}`,
      },
    }
  ).then((res) => res.json());
  setData(data.common);

  return data.common;
};

const { data: foodData, isLoading } = useQuery<getData>({
  queryKey: ["foods", value],
  queryFn: fetchData,
});
console.log("query", foodData);*/
/*const fetchData = async (): Promise<getData> => {
    const data = await fetch(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${value}&common=true&branded=true`,
      {
        headers: {
          "x-app-id": `${process.env.ID}`,
          "x-app-key": `${process.env.API_KEY}`,
        },
      }
    ).then((res) => res.json());
    setData(data.common);

    return data.common;
  };
  const { data: foodData, isLoading } = useQuery<getData>({
    queryKey: ["foods", value],
    queryFn: fetchData,
  });*/
//const { data: foodData } = useQuery(["foods", data], () => fetchData());
//console.log(foodData);

/*const fetchData2 = async (value: string): Promise<getData[]> => {
    const data = await fetch(
      `https://trackapi.nutritionix.com/v2/search/instant?query=${value}&common=true&branded=true`,
      {
        headers: {
          "x-app-id": `${process.env.ID}`,
          "x-app-key": `${process.env.API_KEY}`,
        },
      }
    ).then<ResponseData>((res) => res.json());
    return data.common;
  };*/

//const { data: foodData } = useQuery<getData[]>({ queryKey: ["foods", value], queryFn: fetchData2 })

//console.log("query", foodData);
