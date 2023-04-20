import { MouseEventHandler } from "react";

interface props {
  breakfast?: MouseEventHandler<HTMLButtonElement>;
  lunch?: MouseEventHandler<HTMLButtonElement>;
  dinner?: MouseEventHandler<HTMLButtonElement>;
}

const MealType = ({ breakfast, lunch, dinner }: props) => (
  <div className="dropdown dropdown-hover">
    <label className="bg-black m-8 p-4 text-white cursor-pointer">
      Meal Type
    </label>
    <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <button onClick={breakfast}>
          <a href="">Breakfast</a>
        </button>
      </li>
      <li>
        <button onClick={lunch}>
          <a href="">Lunch</a>
        </button>
      </li>
      <li>
        <button onClick={dinner}>
          <a href="">Dinner</a>
        </button>
      </li>
    </ul>
  </div>
);

export default MealType;
