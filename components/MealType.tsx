import { MouseEventHandler } from "react";

interface props {
  breakfast?: MouseEventHandler<HTMLButtonElement>;
  lunch?: MouseEventHandler<HTMLButtonElement>;
  dinner?: MouseEventHandler<HTMLButtonElement>;
}

const MealType = ({ breakfast, lunch, dinner }: props) => (
  <div className="dropdown dropdown-hover w-full ">
    <label className="bg-black p-4 text-white cursor-pointer flex w-full">
      Meal Type
    </label>
    <ul className="w-full border border-black dropdown-content menu shadow p-1 bg-base-100 -box ">
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
