import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";
import { BreakfastChart } from "..";

interface props {
  searchItems:
    | {
        image: string;
        nutrients: any;
        name: string;
      }[]
    | null;
  nurtrients: any;
  diet: string;
}
const Breakfast = ({ searchItems, nurtrients, diet }: props) => {
  //console.log(searchItems, "searchitems");
  // could add all nutrients and then send it to the chart here
  /*console.log(
    searchItems
      ?.map((a) => a?.nutrients)
      .reduce((a, b) => a.nf_calories + b.nf_calories)
  );*/

  const test = searchItems
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a.concat(b, []));

  console.log(test);

  return (
    <div>
      Breakfast
      {searchItems?.map((a) => (
        <SearchItem
          key={Math.random()}
          name={a.name[0]}
          image={a.image[0]}
          nutrients={a.nutrients}
        />
      ))}
      {/*<MealAnalytics data={nurtrients} diet={diet} />*/}
      <BreakfastChart data={test} diet={diet} />
    </div>
  );
};

export default Breakfast;
