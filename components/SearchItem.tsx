interface props {
  meal: string;
  name: string;
}

const SearchItem = ({ meal, name }: props) => {
  return (
    <div className="bg-emerald-400 p-4 m-6 rounded text-white">
      <p>meal: {meal}</p>
      <p>data: {name}</p>
    </div>
  );
};

export default SearchItem;
