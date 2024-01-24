// eslint-disable-next-line react/prop-types
const UserAboutNavigationPanel = ({ showAboutHandler, showAbout }) => {
  return (
    <div className="w-full bg-white rounded-t-lg desktop:rounded-none border-b-[0.5px] desktop:border-b-[0] desktop:border-r-[0.5px] shadow-md desktop:shadow-none py-4 px-3">
      <p className="font-bold text-xl pl-2">About</p>
      <div>
        <ul className="w-full pt-2 pb-3">
          <li
            onClick={() => showAboutHandler("Overview")}
            className={`text-[1rem] ${
              showAbout === "Overview"
                ? "text-primary-color bg-secondary-color"
                : "hover:bg-gray-100"
            } mt-3 cursor-pointer font-semibold text-gray-500 w-full py-[0.4rem] px-2 rounded-md`}
          >
            Overview
          </li>
          <li
            onClick={() => showAboutHandler("WorkAndEducation")}
            className={`text-[1rem] ${
              showAbout === "WorkAndEducation"
                ? "text-primary-color bg-secondary-color"
                : "hover:bg-gray-100"
            } mt-3 cursor-pointer font-semibold text-gray-500 w-full py-[0.4rem] px-2 rounded-md`}
          >
            Work and education
          </li>
          <li
            onClick={() => showAboutHandler("PlacesLived")}
            className={`text-[1rem] ${
              showAbout === "PlacesLived"
                ? "text-primary-color bg-secondary-color"
                : "hover:bg-gray-100"
            } mt-3 cursor-pointer font-semibold text-gray-500 w-full py-[0.4rem] px-2 rounded-md`}
          >
            Places lived
          </li>
          <li
            onClick={() => showAboutHandler("ContactAndBasicInfo")}
            className={`text-[1rem] ${
              showAbout === "ContactAndBasicInfo"
                ? "text-primary-color bg-secondary-color"
                : "hover:bg-gray-100"
            } mt-3 cursor-pointer font-semibold text-gray-500 w-full py-[0.4rem] px-2 rounded-md`}
          >
            Contact and basic info
          </li>
          <li
            onClick={() => showAboutHandler("FamilyAndRelationships")}
            className={`text-[1rem] ${
              showAbout === "FamilyAndRelationships"
                ? "text-primary-color bg-secondary-color"
                : "hover:bg-gray-100"
            } mt-3 cursor-pointer font-semibold text-gray-500 w-full py-[0.4rem] px-2 rounded-md `}
          >
            Family and relationships
          </li>
          <li
            onClick={() => showAboutHandler("DetailedAboutYou")}
            className={`text-[1rem] ${
              showAbout === "DetailedAboutYou"
                ? "text-primary-color bg-secondary-color"
                : "hover:bg-gray-100"
            } mt-3 cursor-pointer font-semibold text-gray-500 w-full py-[0.4rem] px-2 rounded-md `}
          >
            Detailed about you
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserAboutNavigationPanel;
