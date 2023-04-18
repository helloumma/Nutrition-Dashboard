import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems: { search: string; diet: string; meal: string; name: string }[];
  nurtrients: any;
  diet: string;
}
const Lunch = ({ searchItems, nurtrients, diet }: props) => {
  //console.log(searchItems, "searchitems");

  return (
    <div>
      Lunch
      {searchItems?.map((a) => (
        <SearchItem
          key={a.search}
          search={a.search}
          diet={a.diet}
          meal={a.meal}
          name={a.name[0]}
        />
      ))}
      {/* nutrient data array needs to be sent to meal analytics component */}
      <MealAnalytics data={nurtrients} diet={diet} />
    </div>
  );
};

export default Lunch;
