import React from "react";
import Image from "next/image";
import { mealType } from "@/libs/meal/types";

const MealType = ({ breakfast, lunch, dinner }: mealType) => {
  return (
    <div className="dropdown dropdown-hover w-full ">
      <label className="bg-black p-4 text-white cursor-pointer flex w-full justify-center font-extrabold	">
        Meal Type
        <Image
          className="rotate-180	"
          src="/chevron.svg"
          height={32}
          width={32}
          alt="chevron"
        />
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
};

export default MealType;
