import { ChangeEventHandler } from "react";

interface props {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ onChange }: props) => (
  <>
    <input
      type="text"
      className="rounded border-2 border-emerald-400"
      placeholder="search item"
      onChange={onChange}
    />
  </>
);

export default Search;
