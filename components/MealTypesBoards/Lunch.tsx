import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems: { search: string; diet: string; meal: string; name: string }[];
  nurtrients: any;
}
const Lunch = ({ searchItems, nurtrients }: props) => {
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
          name={a.name}
        />
      ))}
      {/* nutrient data array needs to be sent to meal analytics component */}
      <MealAnalytics data={nurtrients} />
    </div>
  );
};

export default Lunch;
