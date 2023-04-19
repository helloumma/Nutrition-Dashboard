import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface props {
  data: any;
}

const Chart = ({ data }: props) => {
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

  const test = data
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
    <PieChart width={730} height={300}>
      <Pie
        data={test}
        color="#000000"
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={120}
        fill="#8884d8"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} />
        ))}
      </Pie>
      <Tooltip content={CustomTooltip} />
      <Legend />
    </PieChart>
  );
};
export default Chart;
