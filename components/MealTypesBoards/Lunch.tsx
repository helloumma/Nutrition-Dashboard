import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems: { image: string; nutrients: any; name: string }[];
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
          key={a.name[0]}
          image={a.image[0]}
          name={a.name[0]}
          nutrients={a.nutrients}
        />
      ))}
      {/* nutrient data array needs to be sent to meal analytics component */}
      <MealAnalytics data={nurtrients} diet={diet} />
    </div>
  );
};

export default Lunch;
