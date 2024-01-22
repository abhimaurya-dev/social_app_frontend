// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ProfilePic from "../../components/ProfilePic";
import NavMessengerDropDown from "./components/NavMessengerDropDown";
import NavNotificationDropdown from "./components/NavNotificationDropdown";
import NavProfileDropdown from "./components/NavProfileDropdown";
import NavCreateDropDown from "./components/NavCreateDropDown";
import NavSearchDropDown from "./components/NavSearchDropDown";
import NavMoreOptions from "./components/NavMoreOptions";

const NavigationBar = () => {
  const [showDropDownOf, setShowDropDownOf] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const [navHomeButtonActive, setNavHomeButtonActive] = useState(true);
  const [navVideoButtonActive, setNavVideoButtonActive] = useState(false);
  const [navFriendsButtonActive, setNavFriendsButtonActive] = useState(false);
  const [navGroupsButtonActive, setNavGroupsButtonActive] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [search, setSearch] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const showDropDownOfHandler = (value) => {
    setShowDropDownOf(value);
  };

  const showMoreOptionsHandler = () => {
    setShowMoreOptions((state) => !state);
  };

  const searchActiveHandler = () => {
    setSearchActive((state) => !state);
  };

  const searchInputHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchInputFocusHandler = () => {
    setIsSearchFocused(true);
  };

  const searchInputBlurHandler = () => {
    setIsSearchFocused(false);
  };

  const navHomeButtonActiveHandler = () => {
    setNavHomeButtonActive(true);
    setNavFriendsButtonActive(false);
    setNavGroupsButtonActive(false);
    setNavVideoButtonActive(false);
  };
  const navFriendsButtonActiveHandler = () => {
    setNavHomeButtonActive(false);
    setNavFriendsButtonActive(true);
    setNavGroupsButtonActive(false);
    setNavVideoButtonActive(false);
  };
  const navGroupsButtonActiveHandler = () => {
    setNavHomeButtonActive(false);
    setNavFriendsButtonActive(false);
    setNavGroupsButtonActive(true);
    setNavVideoButtonActive(false);
  };
  const navVideoButtonActiveHandler = () => {
    setNavHomeButtonActive(false);
    setNavFriendsButtonActive(false);
    setNavGroupsButtonActive(false);
    setNavVideoButtonActive(true);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <div
      className={`w-full fixed top-0 right-0 flex bg-white justify-between py-2 px-5 shadow-md`}
    >
      <div className="flex items-center">
        <img
          className="h-[2.6rem] w-[2.6rem] mr-2"
          src="src/assets/fb-logo.png"
          alt="logo"
        />
        {windowSize < 768 ? (
          <>
            <div className="cursor-pointer">
              <div
                onClick={searchActiveHandler}
                className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100"
              >
                <span className="text-[1.5rem] text-gray-500 material-symbols-outlined">
                  search
                </span>
              </div>
              {searchActive && (
                <NavSearchDropDown searchActiveHandler={searchActiveHandler} />
              )}
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-4 w-full justify-between items-center outline-none">
              {isSearchFocused && (
                <NavSearchDropDown
                  searchActiveHandler={searchInputBlurHandler}
                />
              )}

              <input
                className="px-6 py-2 w-full outline-none rounded-full bg-gray-100"
                type="text"
                value={search}
                onChange={searchInputHandler}
                onFocus={searchInputFocusHandler}
                placeholder="Search Facebook"
              />
            </div>
          </>
        )}
        {windowSize < 1024 && (
          <div
            className={`ml-6 flex items-center ${
              showMoreOptions && "border-b-2 border-primary-color"
            }`}
          >
            <span
              onClick={showMoreOptionsHandler}
              className={`text-[2rem] ${
                showMoreOptions && "text-primary-color"
              } cursor-pointer text-gray-500 material-symbols-outlined`}
            >
              menu
            </span>
            {showMoreOptions && <NavMoreOptions />}
          </div>
        )}
      </div>

      {windowSize >= 1024 && (
        <div className=" mt-2">
          <ul
            className={`flex justify-between items-center ${
              windowSize > 1424 ? "gap-40" : "gap-24"
            } mr-16`}
          >
            <li onClick={navHomeButtonActiveHandler}>
              <span
                className={`text-[1.8rem] cursor-pointer ${
                  navHomeButtonActive &&
                  "border-b-2 border-primary-color text-primary-color"
                } material-symbols-outlined`}
              >
                home
              </span>
            </li>
            <li onClick={navFriendsButtonActiveHandler}>
              <span
                className={`text-[1.8rem] cursor-pointer ${
                  navFriendsButtonActive &&
                  "border-b-2 border-primary-color text-primary-color"
                } material-symbols-outlined`}
              >
                group
              </span>
            </li>
            <li onClick={navVideoButtonActiveHandler}>
              <span
                className={`text-[1.8rem] cursor-pointer ${
                  navVideoButtonActive &&
                  "border-b-2 border-primary-color text-primary-color"
                } material-symbols-outlined`}
              >
                video_library
              </span>
            </li>
            <li onClick={navGroupsButtonActiveHandler}>
              <span
                className={`text-[1.8rem] cursor-pointer ${
                  navGroupsButtonActive &&
                  "border-b-2 border-primary-color text-primary-color"
                } material-symbols-outlined`}
              >
                groups
              </span>
            </li>
          </ul>
        </div>
      )}
      <div className="dropdown dropdown-end">
        <div className="flex gap-2">
          <div
            tabIndex={0}
            role="button"
            onClick={() => showDropDownOfHandler("create")}
          >
            <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-[1.5rem] text-gray-900 material-symbols-outlined">
                add
              </span>
            </div>
            {showDropDownOf === "create" && <NavCreateDropDown />}
          </div>
          <div
            tabIndex={0}
            role="button"
            onClick={() => showDropDownOfHandler("messenger")}
          >
            <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-[1.5rem] text-gray-900 material-symbols-outlined">
                chat
              </span>
            </div>
            {showDropDownOf === "messenger" && <NavMessengerDropDown />}
          </div>
          <div
            onClick={() => showDropDownOfHandler("notification")}
            tabIndex={0}
            role="button"
          >
            <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-[1.5rem] text-gray-900 material-symbols-outlined">
                notifications
              </span>
            </div>
            {showDropDownOf === "notification" && <NavNotificationDropdown />}
          </div>
          <div
            onClick={() => showDropDownOfHandler("profile")}
            tabIndex={0}
            role="button"
          >
            <ProfilePic
              imgPath={
                "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
              }
              height={"2.6rem"}
              width={"2.6rem"}
            />
            {showDropDownOf === "profile" && <NavProfileDropdown />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
