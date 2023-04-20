import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface props {
  data: any;
}

const Chart = ({ data }: props) => {
  console.log(data, "chart");
  const COLORS = [
    "#8884d8",
    "#82ca9d",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#ffb0ab",
    "#30f0bd",
    "#a8b8e6",
    "#f7e948",
    "#f748b1",
  ];

  // might need some props for different boards for calcs\\

  const addData = data?.reduce(
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

  console.log("addData", addData);
  const test = [addData]
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
  console.log("data", data);
  const pieData = [
    {
      name: "Apple",
      value: 54.85,
    },
    {
      name: "Samsung",
      value: 47.91,
    },
    {
      name: "Redmi",
      value: 16.85,
    },
    {
      name: "One Plus",
      value: 16.14,
    },
    {
      name: "Others",
      value: 10.25,
    },
  ];

  const legendWrapperStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#ffff",
            padding: "5px",
            border: "1px solid #cccc",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }
    return null;
  };
  return (
    <PieChart width={350} height={350}>
      <Pie
        data={test}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={75}
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} />
        ))}
      </Pie>
      <Tooltip content={CustomTooltip} />
      <Legend wrapperStyle={legendWrapperStyle} />
    </PieChart>
  );
};
export default Chart;
