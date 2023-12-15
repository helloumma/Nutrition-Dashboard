import dynamic from "next/dynamic";
import SearchItem from "../SearchItem";
import { meal } from "@/libs/meal/types";

const RenderChartNoSSR = dynamic(() => import("./MealChart"), {
  ssr: false,
});

const Meal = ({ searchItems, title }: meal) => {
  const data = searchItems
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);

  return (
    <>
      <h1 className="sm:text-5xl md:text-6xl text-6xl text-black font-black text-center">
        {title}
      </h1>
      <RenderChartNoSSR data={data} />
      {searchItems?.map((a, i) => (
        <SearchItem key={i + 1} data={a.nutrients} />
      ))}
    </>
  );
};

export default Meal;
