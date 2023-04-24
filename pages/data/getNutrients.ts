const onSubmitAC = async (searchTerm: string) => {
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
};

/*const { data: nutrientData } = useQuery<search>({
  queryKey: ["search"],
  queryFn: onSubmitAC,
});
console.log("query", nutrientData);*/
