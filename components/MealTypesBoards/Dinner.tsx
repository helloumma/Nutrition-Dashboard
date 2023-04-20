import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";
import { DinnerChart } from "..";

interface props {
  searchItems: { image: string; nutrients: any; name: string }[] | null;
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
          key={a.name[0]}
          image={a.image[0]}
          name={a.name[0]}
          nutrients={a.nutrients}
        />
      ))}
      {/*<MealAnalytics data={nurtrients} diet={diet} />*/}
      <DinnerChart data={nurtrients} diet={diet} />
    </div>
  );
};

export default Dinner;
