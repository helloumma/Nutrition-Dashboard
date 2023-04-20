import Chart from "../Analytics/Chart";

interface props {
  data: any;
}

const Overall = ({ data }: props) => {
  const test = data
    ?.map((a) => a?.nutrients)
    ?.reduce((a, b) => a?.concat(b, []), []);

  //console.log(test, "overall");

  const addData = test?.reduce(
    (acc, curr) => ({
      nf_calories: acc.nf_calories + curr.nf_calories,
      nf_cholesterol: acc.nf_cholesterol + curr.nf_cholesterol,
      nf_dietary_fiber: acc.nf_dietary_fiber + curr.nf_dietary_fiber,
      nf_potassium: acc.nf_potassium + curr.nf_potassium,
      nf_protein: acc.nf_protein + curr.nf_protein,
      nf_saturated_fat: acc.nf_saturated_fat + curr.nf_saturated_fat,
      nf_sodium: acc.nf_sodium + curr.nf_sodium,
      nf_sugars: acc.nf_sugars + curr.nf_sugars,
    }),
    {
      nf_calories: 0,
      nf_cholesterol: 0,
      nf_dietary_fiber: 0,
      nf_potassium: 0,
      nf_protein: 0,
      nf_saturated_fat: 0,
      nf_sodium: 0,
      nf_sugars: 0,
    }
  );

  //console.log("overall", addData);

  const dataFormatted = [addData]
    ?.map((a) => [
      { name: "calories", value: a.nf_calories, fill: "#8884d8" },
      { name: "cholesterol", value: a.nf_cholesterol, fill: "#82ca9d" },
      { name: "fiber", value: a.nf_dietary_fiber, fill: "#FFBB28" },
      { name: "potassium", value: a.nf_potassium, fill: "#FF8042" },
      { name: "protein", value: a.nf_protein, fill: "#AF19FF" },
      { name: "saturated fat", value: a.nf_saturated_fat, fill: "#ffb0ab" },
      { name: "sodium", value: a.nf_sodium, fill: "#30f0bd" },
      { name: "sugars", value: a.nf_sugars, fill: "#a8b8e6" },
      {
        name: "carbohydrates",
        value: a.nf_total_carbohydrate,
        fill: "#f7e948",
      },
      { name: "total fats", value: a.nf_total_fat, fill: "#f748b1" },
    ])
    .pop();
  console.log("overall", dataFormatted);
  return (
    <div>
      Overall
      <div className="bg-blue-400 p-2 m-6 rounded text-white">
        <Chart data={dataFormatted} overall={true} />
      </div>
    </div>
  );
};

export default Overall;
