import SearchItem from "../SearchItem";
import { LunchChart } from "..";
import { meal } from "../../types/types";

/*interface props {
  searchItems: { nutrients: any; name: string }[];
  nurtrients: any;
  diet: string;
}*/
const Lunch = ({ searchItems, diet }: meal) => {
  const test = searchItems
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);
  return (
    <>
      <h1 className="text-6xl text-black font-black text-center">Lunch</h1>
      <LunchChart data={test} />
      {searchItems?.map((a) => (
        <SearchItem key={a.name[0]} data={a.nutrients} />
      ))}
    </>
  );
};

export default Lunch;
