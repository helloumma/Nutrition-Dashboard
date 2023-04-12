import { ChangeEventHandler } from "react";

interface props {
  onChange: ChangeEventHandler<HTMLInputElement>;
  search: string;
}

const Search = ({ onChange, search }: props) => (
  <>
    <input
      type="text"
      className="rounded border-2 border-emerald-400"
      placeholder="search item"
      onChange={onChange}
      value={search}
    />
  </>
);

export default Search;
