import Head from "next/head";
import Image from "next/image";
import {
  MealType,
  OverallAnalytics,
  Breakfast,
  Lunch,
  Dinner,
} from "../components";
import { ChangeEvent, useState } from "react";

import MockAutoComplete from "../components/autoComplete";

export default function Home() {
  const [mealType, setMealType] = useState<Boolean>(false);
  const [meal, setMeal] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [data, setData] = useState<[]>([]);
  const [name, setName] = useState<string>("");
  const [nutrients, setNutrients] = useState();
  const [searchItems, setSearchItems] = useState<
    {
      meal: string;
      name: string;
      nutrients: any;
    }[]
  >([]);

  const breakfastMeal = () => {
    setMealType(true);
    setMeal("breakfast");
  };

  const lunchMeal = () => {
    setMealType(true);
    setMeal("lunch");
  };

  const dinnertMeal = () => {
    setMealType(true);
    setMeal("dinner");
  };

  //fix e type
  const onChangeAC = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    fetchData();
  };

  const fetchData = async () => {
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
    setName(data.common?.map((a: any) => a.food_name));
    return data.common;
  };

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
          name,
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

  // BUGS/FIXES
  // add branded and common items to search
  // type checking - interfaces and generics
  // the re-rendering of the dropdown menu in breakfast
  // hydration error with recharts

  // BEST PRACTISES
  // add react-query for data handling
  // create data hooks
  // error handling for 500 api request or typos or searched for query not in data
  // look into state management (context API or zustand)
  // testing + coverage via vitest
  // READ ME docs

  // [next week]
  // 1. type checks; types/interfaces/generics
  // 2. add react-query
  // 3. create data hooks
  // 4. add state management
  // 5. fix the re-rendering and hydration issues
  // 6. add error handling
  // 7. testing
  // 8. responsive styling
  // 9. readme.md
  return (
    <>
      <Head>
        <title>Nutrition Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          <div className="w-2/12 h-screen  p-4">
            <MealType
              breakfast={breakfastMeal}
              lunch={lunchMeal}
              dinner={dinnertMeal}
            />
            <MockAutoComplete
              onChangeAC={onChangeAC}
              dataAC={Array.isArray(data) ? data : []}
              onSubmitAC={() => onSubmitAC(value)}
              valueAC={value}
            />
            <div>
              {data
                ?.filter((item: { food_name: string }) => {
                  const searchTerm = value;
                  const fullName = item.food_name.toLowerCase();
                  return (
                    (searchTerm &&
                      fullName.startsWith(searchTerm) &&
                      fullName !== searchTerm) ||
                    fullName == searchTerm
                  );
                })
                ?.map((item: { food_name: string; photo: any; thumb: any }) => (
                  <div key={item.food_name}>
                    {item.food_name}
                    <Image
                      src={item.photo.thumb}
                      onClick={() => onSubmitAC(item.food_name)}
                      alt={item.food_name}
                      className="cursor-pointer"
                      width={75}
                      height={200}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="w-10/12 border-l-4 border-double	border-black">
            <div className="w-full">
              <OverallAnalytics data={searchItems} />
            </div>
            <div className="flex">
              <div className="w-full">
                <Breakfast
                  searchItems={searchItems.filter(
                    (item) => item.meal === "breakfast"
                  )}
                  diet={"breakfast"}
                />
              </div>
              <div className="w-full">
                <Lunch
                  searchItems={searchItems.filter(
                    (item) => item.meal === "lunch"
                  )}
                  diet={"lunch"}
                />
              </div>
              <div className="w-full">
                <Dinner
                  searchItems={searchItems.filter(
                    (item) => item.meal === "dinner"
                  )}
                  diet={"dinner"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
