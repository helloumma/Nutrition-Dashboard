import Chart from "./Chart";

interface props {
  data: any;
  diet: string;
}

// pass through props to ensure data is rendered on the correct boards

// find a charting library to display the following data (and update it, every time a new item is added)
// might be tricky for indivudal, so have it as a counter that adds/subtracts from like a donut chart or something

// store the breakfast data and be passed down here

// etc etc with lunch and breakfast
const Meal = ({ data, diet }: props) => {
  //console.log(data);
  return (
    <div className="bg-blue-400 p-2 m-6 rounded text-white">
      Meal Analytics
      {/* you need to render a chart for each meal type => so you can't have a generic component  */}
      <Chart data={data} />
    </div>
  );
};

export default Meal;
