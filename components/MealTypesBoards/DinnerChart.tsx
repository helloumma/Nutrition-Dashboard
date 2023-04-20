import Chart from "../Analytics/Chart";

interface props {
  data: any;
  diet: string;
}

const DinnerChart = ({ data, diet }: props) => (
  <div className="border border-black p-2 m-6 text-white">
    <Chart data={data} />
  </div>
);

export default DinnerChart;
