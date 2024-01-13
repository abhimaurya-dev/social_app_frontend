const NavCreateDropDown = () => {
  return (
    <div>
      <div className="z-[4] mt-2 bg-white rounded-lg border-[0.01rem] w-[23rem] p-2 shadow-lg menu menu-sm dropdown-content">
        <div tabIndex={1} className="mx-0 px-1 mt-1 mb-2">
          <div className="flex justify-between items-center">
            <p className="font-bold px-2 text-[1.5rem]">Create</p>
          </div>
          <div className="mt-4">
            <div className="flex gap-4 mt-2 rounded-lg hover:bg-gray-100 px-2 py-3">
              <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-200">
                <span className="text-[1.5rem] text-gray-800 material-symbols-outlined">
                  edit_square
                </span>
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[1rem] font-semibold">Post</p>
                <p className="text-gray-600">Share a post on News Feed.</p>
              </div>
            </div>
            <div className="flex gap-4 mt-2 rounded-lg hover:bg-gray-100 px-2 py-3">
              <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-200">
                <span className="text-[1.5rem] text-gray-800 material-symbols-outlined">
                  import_contacts
                </span>
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[1rem] font-semibold">Story</p>
                <p className="text-gray-600">
                  Share a photo or write something.
                </p>
              </div>
            </div>
            <div className="flex gap-4 mt-2 rounded-lg hover:bg-gray-100 px-2 py-3">
              <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-200">
                <span className="text-[1.5rem] text-gray-800 material-symbols-outlined">
                  movie
                </span>
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[1rem] font-semibold">Reel</p>
                <p className="text-gray-600">Share a reel.</p>
              </div>
            </div>
            <div className="flex gap-4 mt-2 rounded-lg hover:bg-gray-100 px-2 py-3">
              <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-200">
                <span className="text-[1.5rem] text-gray-800 material-symbols-outlined">
                  celebration
                </span>
              </div>
              <div className="flex flex-col justify-start">
                <p className="text-[1rem] font-semibold">Life event</p>
                <p className="text-gray-600">
                  Add a life event to your profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavCreateDropDown;
