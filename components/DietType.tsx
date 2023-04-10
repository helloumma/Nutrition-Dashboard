const DietType = () => (
  <div className="dropdown dropdown-hover">
    <label tabIndex={0} className="btn bg-emerald-400 m-1">
      Diet Type
    </label>
    <ul
      tabIndex={0}
      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>
    </ul>
  </div>
);

export default DietType;
