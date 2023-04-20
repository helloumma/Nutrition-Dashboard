interface props {
  name: string;
  image: string;
  nutrients: any;
}

const SearchItem = ({ name, image, nutrients }: props) => {
  return (
    <div className="p-4 m-6 border border-black h-128">
      <img src={image} />
      {nutrients?.map((a: any) => (
        <div key={a.food_name}>
          <p className="border-b-8 border-black text-4xl text-black font-black">
            {a.food_name}
          </p>
          <div className="flex justify-between border-b-4 border-black text-2xl">
            <p className="font-extrabold text-black">calories</p>
            <p className="font-black text-black">{a.nf_calories}</p>
          </div>
          <div className="flex justify-between border-b border-black">
            <p className="font-semibold text-black">cholesterol</p>
            <p>{a.nf_cholesterol}</p>
          </div>
          <div className="flex justify-between border-b border-black">
            <p className="font-semibold text-black">fiber</p>
            <p>{a.nf_dietary_fiber}</p>
          </div>

          <div className="flex justify-between border-b border-black">
            <p className="font-semibold text-black">potassium</p>
            <p>{a.nf_potassium}</p>
          </div>

          <div className="flex justify-between border-b border-black">
            <p className="font-semibold text-black">protein</p>
            <p>{a.nf_protein}</p>
          </div>

          <div className="flex justify-between border-b border-black">
            <p className="font-semibold text-black">saturated fat</p>
            <p>{a.nf_saturated_fat}</p>
          </div>

          <div className="flex justify-between border-b border-black">
            <p className="font-semibold text-black">total fat</p>
            <p>{a.nf_total_fat}</p>
          </div>

          <div className="flex justify-between border-b-8 border-black">
            <p className="font-semibold text-black">sodium</p>
            <p>{a.nf_sodium}</p>
          </div>

          <div className="flex justify-between border-b border-black">
            <p className="text-black">sugars</p>
            <p>{a.nf_sugars}</p>
          </div>

          <div className="flex justify-between border-b-4 border-black">
            <p className="text-black">carbohydrates</p>
            <p>{a.nf_total_carbohydrate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchItem;
