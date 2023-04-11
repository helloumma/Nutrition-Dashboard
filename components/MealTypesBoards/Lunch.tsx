import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems: any;
}
const Lunch = ({ searchItems }: props) => {
  console.log(searchItems, "searchitems");

  return (
    <div>
      Lunch
      {searchItems}
      <SearchItem dietType={""} mealType={""} searchDetails={""} />
      <MealAnalytics />
    </div>
  );
};

export default Lunch;
