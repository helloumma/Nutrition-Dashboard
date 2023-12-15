import dynamic from "next/dynamic";
import SearchItem from "../SearchItem";
import { meal } from "@/libs/meal/types";

const BreakfastChartNoSSR = dynamic(() => import("./BreakfastChart"), {
  ssr: false,
});

const Breakfast = ({ searchItems }: meal) => {
  const test = searchItems
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);

  return (
    <>
      <h1 className="sm:text-5xl md:text-6xl text-6xl text-black font-black text-center">
        Breakfast
      </h1>
      <BreakfastChartNoSSR data={test} />
      {searchItems?.map((a) => (
        <SearchItem key={Math.random()} data={a.nutrients} />
      ))}
    </>
  );
};

export default Breakfast;
