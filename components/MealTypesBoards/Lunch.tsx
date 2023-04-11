import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems: { search: string; diet: string; meal: string }[] | null;
}
const Lunch = ({ searchItems }: props) => {
  console.log(searchItems, "searchitems");

  return (
    <div>
      Lunch
      {searchItems?.map((a) => (
        // eslint-disable-next-line react/jsx-key
        <SearchItem search={a.search} diet={a.diet} meal={a.meal} />
      ))}
      {/*searchItems[0] && (
        <SearchItem
          search={searchItems[0].search}
          diet={searchItems[0].diet}
          meal={searchItems[0].meal}
        />
      )*/}
      <MealAnalytics />
    </div>
  );
};

export default Lunch;
