import dynamic from "next/dynamic";
import SearchItem from "../SearchItem";
import { meal } from "@/types/types";

const LunchChartNoSSR = dynamic(() => import("./LunchChart"), {
  ssr: false,
});

const Lunch = ({ searchItems, diet }: meal) => {
  const test = searchItems
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);
  return (
    <>
      <h1 className="sm:text-5xl md:text-6xl text-6xl text-black font-black text-center">
        Lunch
      </h1>
      <LunchChartNoSSR data={test} />
      {searchItems?.map((a) => (
        <SearchItem key={Math.random()} data={a.nutrients} />
      ))}
    </>
  );
};

export default Lunch;
