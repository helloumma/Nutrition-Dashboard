import SearchItem from "../SearchItem";
import { DinnerChart } from "..";
import { meal } from "../../types/types";

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
      <DinnerChart data={test} />
      {searchItems?.map((a) => (
        <SearchItem key={a.name[0]} data={a.nutrients} />
      ))}
    </>
  );
};

export default Dinner;
