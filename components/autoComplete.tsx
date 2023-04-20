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
      className="rounded border-2 border-red-400"
      value={valueAC}
      onChange={onChangeAC}
    />
    <button type="submit" className="bg-red-400" onClick={onSubmitAC}>
      add
    </button>
  </>
);
export default AutoComplete;
