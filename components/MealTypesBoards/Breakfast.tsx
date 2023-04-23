import SearchItem from "../SearchItem";
import { BreakfastChart } from "..";
import { meal } from "@/types/types";

/*interface props {
  searchItems: { nutrients: any; name: string }[] | null;
  nurtrients: any;
  diet: string;
}*/
const Breakfast = ({ searchItems, diet }: meal) => {
  const test = searchItems
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);

  return (
    <>
      <h1 className="text-6xl text-black font-black text-center">Breakfast</h1>
      <BreakfastChart data={test} />
      {searchItems?.map((a) => (
        <SearchItem key={a.name} data={a.nutrients} />
      ))}
    </>
  );
};

export default Breakfast;
