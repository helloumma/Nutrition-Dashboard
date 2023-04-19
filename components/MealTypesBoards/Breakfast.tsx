import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

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
  console.log(searchItems);
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
      <MealAnalytics data={nurtrients} diet={diet} />
    </div>
  );
};

export default Breakfast;
