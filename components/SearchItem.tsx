interface props {
  search: string;
  diet: string;
  meal: string;
  name: string;
}

const SearchItem = ({ search, diet, meal, name }: props) => {
  return (
    <div>
      <p>search: {search}</p>
      <p>diet: {diet}</p>
      <p>meal: {meal}</p>
      <p>data: {name}</p>
    </div>
  );
};

export default SearchItem;
