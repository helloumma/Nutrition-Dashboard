interface props {
  search: string;
  diet: string;
  meal: string;
}

const SearchItem = ({ search, diet, meal }: props) => {
  return (
    <div>
      <p>search: {search}</p>
      <p>diet: {diet}</p>
      <p>meal: {meal}</p>
    </div>
  );
};

export default SearchItem;
