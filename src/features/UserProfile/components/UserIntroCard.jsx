const UserIntroCard = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md py-4 px-5">
      <p className="font-bold text-xl">Intro</p>
      <div className="flex items-center flex-col mt-2">
        <p>Everything is vulnerable</p>
        <button className="w-full py-2 mt-3 bg-gray-200 rounded-md font-semibold">
          Edit bio
        </button>
        <div className="flex justify-start w-full mt-3">
          <ul className="">
            <li className="flex gap-3 justify-start mt-2">
              <span className="material-symbols-outlined filled text-gray-400">
                work
              </span>
              <p className="text-[1rem]">Works at studying</p>
            </li>
            <li className="flex gap-3 justify-start mt-4">
              <span className="material-symbols-outlined filled text-gray-400">
                Home
              </span>
              <p className="text-[1rem]">Works at studying</p>
            </li>
            <li className="flex gap-3 justify-start mt-4">
              <span className="material-symbols-outlined filled text-gray-400">
                location_on
              </span>
              <p className="text-[1rem]">Works at studying</p>
            </li>
            <li className="flex gap-3 justify-start mt-4">
              <span className="material-symbols-outlined filled text-gray-400">
                favorite
              </span>
              <p className="text-[1rem]">Works at studying</p>
            </li>
          </ul>
        </div>
        <button className="w-full py-2 mb-2 mt-6 bg-gray-200 rounded-md font-semibold">
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default UserIntroCard;
