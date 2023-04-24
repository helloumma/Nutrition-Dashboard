const fetchData = async (): Promise<getData> => {
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
console.log("query", foodData);
