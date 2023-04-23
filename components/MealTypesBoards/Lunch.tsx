import SearchItem from "../SearchItem";
import { LunchChart } from "..";

interface props {
  searchItems: { nutrients: any; name: string }[];
  nurtrients: any;
  diet: string;
}
const Lunch = ({ searchItems, nurtrients, diet }: props) => {
  //console.log(searchItems, "searchitems");
  const test = searchItems
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);
  return (
    <>
      <h1 className="text-6xl text-black font-black text-center">Lunch</h1>
      <LunchChart data={test} diet={diet} />
      {searchItems?.map((a) => (
        <SearchItem key={a.name[0]} nutrients={a.nutrients} />
      ))}
    </>
  );
};

export default Lunch;
