interface props {
  data: any;
}

const Meal = ({ data }: props) => {
  console.log(data);
  return (
    <div>
      Meal Analytics
      {data?.map((a) => a.nf_calories)}
    </div>
  );
};

export default Meal;
