import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems:
    | { search: string; diet: string; meal: string; name: string }[]
    | null;
  nurtrients: any;
  diet: string;
}
const Dinner = ({ searchItems, nurtrients, diet }: props) => {
  //console.log(searchItems, "searchitems");

  return (
    <div>
      Dinner
      {searchItems?.map((a) => (
        <SearchItem
          key={a.search}
          search={a.search}
          diet={a.diet}
          meal={a.meal}
          name={a.name[0]}
        />
      ))}
      <MealAnalytics data={nurtrients} diet={diet} />
    </div>
  );
};

export default Dinner;
