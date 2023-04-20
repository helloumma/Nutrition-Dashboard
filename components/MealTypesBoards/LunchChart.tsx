import Chart from "../Analytics/Chart";

interface props {
  data: any;
  diet: string;
}

const LunchChart = ({ data, diet }: props) => (
  <div className="bg-blue-400 p-2 m-6 rounded text-white">
    Meal Analytics [lunch]
    <Chart data={data} />
  </div>
);

export default LunchChart;
