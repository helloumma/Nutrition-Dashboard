import dynamic from "next/dynamic";
import SearchItem from "../SearchItem";
import { DinnerChart } from "..";
import { meal } from "@/types/types";

const DinnerChartNoSSR = dynamic(() => import("./DinnerChart"), {
  ssr: false,
});
/*interface props {
  searchItems: { nutrients: any; name: string }[] | null;
  nurtrients: any;
  diet: string;
}*/

const Dinner = ({ searchItems, diet }: meal) => {
  const test = searchItems
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);
  return (
    <>
      <h1 className="text-6xl text-black font-black text-center">Dinner</h1>
      <DinnerChartNoSSR data={test} />
      {searchItems?.map((a) => (
        <SearchItem key={Math.random()} data={a.nutrients} />
      ))}
    </>
  );
};

export default Dinner;
