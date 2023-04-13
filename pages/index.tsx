import Head from "next/head";
import {
  MealType,
  DietType,
  Search,
  OverallAnalytics,
  Breakfast,
  Lunch,
  Dinner,
} from "../components";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [dietType, setDietType] = useState<Boolean>(false);
  const [mealType, setMealType] = useState<Boolean>(false);
  const [diet, setDiet] = useState<string>("");
  const [meal, setMeal] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [searchItems, setSearchItems] = useState<
    {
      search: string;
      diet: string;
      meal: string;
    }[]
  >([]);

  const allDiet = () => {
    setDietType(true);
    setDiet("all");
  };

  const vegDiet = () => {
    setDietType(true);
    setDiet("vegetarian");
  };

  const veganDiet = () => {
    setDietType(true);
    setDiet("vegan");
  };

  const nonGlutenDiet = () => {
    setDietType(true);
    setDiet("non-gluten");
  };

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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = () => {
    const newItem = { search, diet, meal };
    setSearchItems((prevItems) => [...prevItems, newItem]);
    setSearch("");
  };

  /*const data = await fetch(
    "https://trackapi.nutritionix.com/v2/search/instant?query=apple",
    {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        "x-app-id": `${process.env.NEXT_PUBLIC_ID}`,
        "x-app-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );

  const responseData = await data.json();
  const commonArray = responseData.common;
  console.log(commonArray);*/

  // TO DO: Find a way to know where the submitted values should go to after meal selection (breakfast, lunch or dinner board)
  // above done but replicate to breakfast/dinner (reusability)

  // find a good api
  // have auto complete on the search so users can select the item
  // and then have that item go to the correct board
  // then do the meal analytics (basic stuff for now)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex">
          <div className="w-full">
            <DietType
              all={allDiet}
              vegetarian={vegDiet}
              vegan={veganDiet}
              nonGluten={nonGlutenDiet}
            />
          </div>
          <div className="w-full">
            <MealType
              breakfast={breakfastMeal}
              lunch={lunchMeal}
              dinner={dinnertMeal}
            />
          </div>
          <div className="w-full">
            <Search onChange={onChange} search={search} />
          </div>
          <div className="w-full">
            <button
              type="submit"
              className="bg-emerald-400 px-20 rounded"
              onClick={onSubmit}
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="w-full">
            <Breakfast
              searchItems={searchItems.filter(
                (item) => item.meal === "breakfast"
              )}
            />
          </div>
          <div className="w-full">
            <Lunch
              searchItems={searchItems.filter((item) => item.meal === "lunch")}
            />
          </div>
          <div className="w-full">
            <Dinner
              searchItems={searchItems.filter((item) => item.meal === "dinner")}
            />
          </div>
          <div className="w-full">
            <OverallAnalytics />
          </div>
        </div>
      </main>
    </>
  );
}
