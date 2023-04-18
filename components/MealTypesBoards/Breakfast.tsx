import SearchItem from "../SearchItem";
import { MealAnalytics } from "..";

interface props {
  searchItems:
    | {
        image: string;

        name: string;
      }[]
    | null;
  nurtrients: any;
  diet: string;
}
const Breakfast = ({ searchItems, nurtrients, diet }: props) => {
  //console.log(searchItems, "searchitems");

  return (
    <div>
      Breakfast
      {searchItems?.map((a) => (
        <SearchItem key={a.name[0]} name={a.name[0]} image={a.image[0]} />
      ))}
      <MealAnalytics data={nurtrients} diet={diet} />
    </div>
  );
};

export default Breakfast;
