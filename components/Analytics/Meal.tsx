interface props {
  data: any;
  diet: string;
}

// pass through props to ensure data is rendered on the correct boards

const Meal = ({ data, diet }: props) => {
  //console.log(data);
  return (
    <div>
      Meal Analytics
      {/*you need to attach the search with the nutrients for each
      query*/}
      {diet === "breakfast" ? data?.map((a) => a.nf_calories) : "not breakfast"}
      {diet === "lunch" ? data?.map((a) => a.nf_calories) : "not lunch"}
      {diet === "dinner" ? data?.map((a) => a.nf_calories) : "not dinner"}
      {/*data?.map((a) => a.nf_calories)*/}
    </div>
  );
};

export default Meal;
