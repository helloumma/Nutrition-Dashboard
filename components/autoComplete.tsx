interface props {
  onChangeAC: any;
  dataAC: any;
  onSubmitAC: any;
  valueAC: any;
}

const AutoComplete = ({ onChangeAC, onSubmitAC, valueAC }: props) => (
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
      className="bg-black h-10 w-full flex justify-center mt-4 text-white flex justify-center items-center	"
      onClick={onSubmitAC}
    >
      add
    </button>
  </>
);
export default AutoComplete;
