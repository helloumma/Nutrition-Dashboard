interface props {
  data: any;
  diet: string;
}

// pass through props to ensure data is rendered on the correct boards

// find a charting library to display the following data (and update it, every time a new item is added)
// might be tricky for indivudal, so have it as a counter that adds/subtracts from like a donut chart or something

const Meal = ({ data, diet }: props) => {
  //console.log(data);
  return (
    <div className="bg-blue-400 p-4 m-6 rounded text-white">
      Meal Analytics
      {/*you need to attach the search with the nutrients for each
      query*/}
      {diet === "breakfast" || diet === "lunch" || diet === "dinner"
        ? data?.map((a: any) => (
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
          ))
        : ""}
      {/*diet === "lunch" && data?.map((a) => a.nf_calories)*/}
      {/*data?.map((a) => a.nf_calories)*/}
    </div>
  );
};

export default Meal;
