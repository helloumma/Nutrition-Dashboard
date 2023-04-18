interface props {
  name: string;
  image: string;
}

const SearchItem = ({ name, image }: props) => {
  return (
    <div className="bg-emerald-400 p-4 m-6 rounded text-white">
      <p>{name}</p>
      <p>
        <img src={image} />
      </p>
    </div>
  );
};

export default SearchItem;
