import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems: { search: string; diet: string; meal: string }[] | null;
}
const Breakfast = ({ searchItems }: props) => {
  console.log(searchItems, "searchitems");

  return (
    <div>
      Breakfast
      {searchItems?.map((a) => (
        <SearchItem
          key={a.search}
          search={a.search}
          diet={a.diet}
          meal={a.meal}
        />
      ))}
      <MealAnalytics />
    </div>
  );
};

export default Breakfast;
