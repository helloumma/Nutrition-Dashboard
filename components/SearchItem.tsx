interface props {
  search: string;
  diet: string;
  meal: string;
}

const SearchItem = ({ search, diet, meal }: props) => {
  return (
    <div>
      Search Item
      {search}
      {diet}
      {meal}
    </div>
  );
};

export default SearchItem;
