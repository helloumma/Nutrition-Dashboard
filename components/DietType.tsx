import { MouseEventHandler } from "react";

interface props {
  all?: MouseEventHandler<HTMLButtonElement>;
  vegetarian?: MouseEventHandler<HTMLButtonElement>;
  vegan?: MouseEventHandler<HTMLButtonElement>;
  nonGluten?: MouseEventHandler<HTMLButtonElement>;
}
const DietType = ({ all, vegetarian, vegan, nonGluten }: props) => {
  return (
    <div className="dropdown dropdown-hover">
      <label className="btn bg-emerald-400 m-1">Diet Type</label>
      <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <button onClick={all}>
            <a href="">All</a>
          </button>
        </li>
        <li>
          <button onClick={vegetarian}>
            <a href="">Vegetarian</a>
          </button>
        </li>
        <li>
          <button onClick={vegan}>
            <a href="">Vegan</a>
          </button>
        </li>
        <li>
          <button onClick={nonGluten}>
            <a href="">Non-gluten</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DietType;
