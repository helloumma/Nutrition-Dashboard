export async function fetchData(value: string) {
  const response = await fetch(
    `https://trackapi.nutritionix.com/v2/search/instant?query=${value}&common=true`,
    {
      headers: {
        "x-app-id": `${process.env.ID}`,
        "x-app-key": `${process.env.API_KEY}`,
      },
    }
  );

  const data = await response.json();
  return data.common;
}
