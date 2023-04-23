import Chart from "../Analytics/Chart";
import { data } from "../../types/types";

/*interface props {
  data: {}[];
}*/

const BreakfastChart = ({ data }: data) => {
  return (
    <div className="border border-black p-2 m-6 text-white">
      <Chart data={data} />
    </div>
  );
};

export default BreakfastChart;
