import Head from "next/head";
import dynamic from "next/dynamic";
import { MealType, Meal, MockAutoComplete } from "../components";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

import { search } from "@/libs/search/types";

import { fetchData } from "./api/getData";
import { nutrientsData } from "./api/getNutrients";

const OverallNoSSR = dynamic(() => import("../components/Analytics/Overall"), {
  ssr: false,
});

export default function Home() {
  const [mealType, setMealType] = useState<Boolean>(false);
  const [meal, setMeal] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [searchItems, setSearchItems] = useState<search>([]);
  const [data, setData] = useState<[]>([]);

  const onSubmitAC = (values: any) => {
    setValue(values.searchItem);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault;
    const newNutrients = await nutrientsData(value, meal);
    setSearchItems((prevItems) => [...prevItems, ...newNutrients.searchItems]);
    onSubmitAC(value);
    setValue("");
  };

  const breakfastMeal = useCallback(() => {
    setMealType(true);
    setMeal("breakfast");
  }, [setMeal, setMealType]);

  const lunchMeal = useCallback(() => {
    setMealType(true);
    setMeal("lunch");
  }, [setMeal, setMealType]);

  const dinnerMeal = useCallback(() => {
    setMealType(true);
    setMeal("dinner");
  }, [setMeal, setMealType]);

  const onChangeAC = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchAsyncData = async () => {
      const fetchedData = await fetchData(value);
      setData(fetchedData); 
    };

    if (value) {
      fetchAsyncData();
    }
  }, [value]);

  return (
    <>
      <Head>
        <title>Nutrition Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/12 sm:w-full w-full md:h-screen p-4">
            <MealType
              breakfast={breakfastMeal}
              lunch={lunchMeal}
              dinner={dinnerMeal}
            />
            <MockAutoComplete
              onChangeAC={onChangeAC}
              dataAC={data}
              onSubmitAC={handleSubmit}
              valueAC={value}
            />
          </div>
          <div className="w-screen md:w-10/12 md:w-10/12 md:border-l-4 border-t-4 md:border-t-0 border-double	border-black">
            <div className="sm:w-screen md:w-full">
              <OverallNoSSR data={searchItems} />
            </div>
            <div className="md:w-full w-full  flex md:flex-row flex-col">
              <div className="xs:w-full sm:w-full md:w-1/3">
                <Meal
                  searchItems={searchItems.filter(
                    (item) => item.meal === "breakfast"
                  )}
                  title={"Breakfast"}
                />
              </div>
              <div className="xs:w-full sm:w-full md:w-1/3">
                <Meal
                  searchItems={searchItems.filter(
                    (item) => item.meal === "lunch"
                  )}
                  title={"Lunch"}
                />
              </div>
              <div className="xs:w-full sm:w-full md:w-1/3">
                <Meal
                  searchItems={searchItems.filter(
                    (item) => item.meal === "dinner"
                  )}
                  title={"Dinner"}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
