import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems: { search: string; diet: string; meal: string }[];
}
const Lunch = ({ searchItems }: props) => {
  console.log(searchItems, "searchitems");

  return (
    <div>
      Lunch
      {searchItems[0] && (
        <SearchItem
          search={searchItems[0].search}
          diet={searchItems[0].diet}
          meal={searchItems[0].meal}
        />
      )}
      <MealAnalytics />
    </div>
  );
};

export default Lunch;
