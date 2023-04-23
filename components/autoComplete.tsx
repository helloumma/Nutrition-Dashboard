//import { ChangeEventHandler, MouseEventHandler } from "react";
import { autoComplete } from "@/types/types";

/*interface props {
  onChangeAC: ChangeEventHandler<HTMLInputElement> | undefined;
  dataAC: [];
  onSubmitAC:
    | ChangeEventHandler<HTMLInputElement>
    | MouseEventHandler<HTMLButtonElement>
    | undefined;
  valueAC: string;
}*/

const AutoComplete = ({ onChangeAC, onSubmitAC, valueAC }: autoComplete) => (
  <>
    <input
      type="text"
      placeholder="search item..."
      className=" border border-black0 h-10 mt-8 w-full"
      value={valueAC}
      onChange={onChangeAC}
    />
    <button
      type="submit"
      className="bg-black h-10 w-full flex justify-center mt-4 text-white flex justify-center items-center	font-semibold	"
      onClick={onSubmitAC}
    >
      Add
    </button>
  </>
);
export default AutoComplete;
