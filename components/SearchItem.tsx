interface props {
  name: string;
  image: string;
  nutrients: any;
}

const SearchItem = ({ name, image, nutrients }: props) => {
  return (
    <div className="bg-emerald-400 p-4 m-6 rounded text-white">
      <p>{name}</p>
      <p>
        <img src={image} />
        {nutrients?.map((a: any) => (
          <div key={a.food_name}>
            <p>food name: {a.food_name}</p>
            <p>calories: {a.nf_calories}</p>
            <p>cholesterol: {a.nf_cholesterol}</p>
            <p>fiber: {a.nf_dietary_fiber}</p>
            <p>potassium: {a.nf_potassium}</p>
            <p>protein: {a.nf_protein}</p>
            <p>saturated fat: {a.nf_saturated_fat}</p>
            <p>total fat: {a.nf_total_fat}</p>
            <p>sodium: {a.nf_sodium}</p>
            <p>sugars: {a.nf_sugars}</p>
            <p>carbohydrates: {a.nf_total_carbohydrate}</p>
          </div>
        ))}
      </p>
    </div>
  );
};

export default SearchItem;
