import { useState } from "react";

// eslint-disable-next-line react/prop-types
const NavSearchDropDown = ({ searchActiveHandler }) => {
  const [search, setSearch] = useState("");

  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="absolute z-[4] top-0 left-0 w-[21rem] bg-white border rounded-lg ">
      <div className="mt-2 px-4 mb-4 flex flex-col justify-center items-center">
        <div className="flex gap-4 w-full justify-between items-center outline-none">
          <span
            onClick={searchActiveHandler}
            className="cursor-pointer material-symbols-outlined"
          >
            arrow_left_alt
          </span>
          <input
            className="px-6 py-2 w-full outline-none rounded-full bg-gray-100"
            type="text"
            value={search}
            onChange={searchInputHandler}
            placeholder="Search Facebook"
          />
        </div>
        {search.length === 0 && (
          <p className="mt-3 text-gray-500">No recent searches</p>
        )}
      </div>
    </div>
  );
};

export default NavSearchDropDown;
