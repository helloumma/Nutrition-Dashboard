import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

interface props {
  data: any;
}

const Chart = ({ data }: props) => {
  const COLORS = ["#8884d8", "#82ca9d", "#FFBB28", "#FF8042", "#AF19FF"];

  // map over data into chart {name: a.name, value: a.nf_calories} etc.
  const test = data
    ?.map((a) => [
      { name: "calories", value: a.nf_calories },
      { name: "cholesterol", value: a.nf_cholesterol },
      { name: "fiber", value: a.nf_dietary_fiber },
      { name: "potassium", value: a.nf_potassium },
      { name: "protein", value: a.nf_protein },
      { name: "saturated fat", value: a.nf_saturated_fat },
      { name: "sodium", value: a.nf_sodium },
      { name: "sugars", value: a.nf_sugars },
      { name: "carbohydrates", value: a.nf_total_carbohydrate },
      { name: "total fats", value: a.nf_total_fat },
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
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={CustomTooltip} />
      <Legend />
    </PieChart>
  );
};
export default Chart;
