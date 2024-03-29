import Chart from "../Analytics/Chart";
import { data } from "@/libs/data/types";

const MealChart = ({ data }: data) => (
  <div className="border border-black p-2 m-6 text-white">
    <Chart data={data} />
  </div>
);

export default MealChart;
