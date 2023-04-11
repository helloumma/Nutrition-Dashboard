interface props {
  dietType: string;
  mealType: string;
  searchDetails: string;
}

const SearchItem = ({ dietType, mealType, searchDetails }: props) => (
  <div>
    Search Item
    {dietType}
    {mealType}
    {searchDetails}
  </div>
);

export default SearchItem;
