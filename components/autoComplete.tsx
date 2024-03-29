import { autoComplete } from "@/libs/search/types";
import Image from "next/image";

const AutoComplete = ({
  onChangeAC,
  onSubmitAC,
  dataAC,
  valueAC,
}: autoComplete) => {
  console.log(dataAC);
  return (
    <>
      <input
        type="text"
        placeholder="search item..."
        className={`border h-10 mt-8 w-full`}
        value={valueAC}
        onChange={onChangeAC}
      />
      <button
        type="submit"
        className="bg-black h-10 w-full flex justify-center mt-4 text-white flex justify-center items-center font-semibold	"
        onClick={onSubmitAC}
      >
        Add
      </button>
      <div>
        {dataAC
          ?.filter((item: { food_name: string }) => {
            const searchTerm = valueAC;
            const fullName = item.food_name.toLowerCase();
            return (
              (searchTerm &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm) ||
              fullName == searchTerm
            );
          })
          .map(
            (
              item: { food_name: string; photo: any; thumb: any },
              i: number
            ) => (
              <div className="flex" key={i + 1}>
                <Image
                  src={item.photo.thumb}
                  onClick={onSubmitAC}
                  alt={item.food_name}
                  className="cursor-pointer"
                  width={75}
                  height={200}
                />
                {item.food_name}
              </div>
            )
          )}
      </div>
    </>
  );
};

export default AutoComplete;
