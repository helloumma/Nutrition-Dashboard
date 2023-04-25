import React from "react";
import { useMemo } from "react";
import Image from "next/image";
import { mealType } from "@/types/types";

const MealType = ({ breakfast, lunch, dinner }: mealType) => {
  const memoizedBreakfast = useMemo(() => breakfast, [breakfast]);
  const memoizedLunch = useMemo(() => lunch, [lunch]);
  const memoizedDinner = useMemo(() => dinner, [dinner]);

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
          <button onClick={memoizedBreakfast}>
            <a href="">Breakfast</a>
          </button>
        </li>
        <li>
          <button onClick={memoizedLunch}>
            <a href="">Lunch</a>
          </button>
        </li>
        <li>
          <button onClick={memoizedDinner}>
            <a href="">Dinner</a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(MealType);
