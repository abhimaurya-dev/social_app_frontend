import { useState } from "react";
import UserAboutNavigationPanel from "./components/UserAboutNavigationPanel";
import UserAboutOverview from "./components/UserAboutOverview";

const UserAbout = () => {
  const [showAbout, setShowAbout] = useState("Overview");

  const showAboutHandler = (value) => {
    setShowAbout(value);
  };

  return (
    <div className="mx-5 mt-3">
      <div className="desktop:flex desktop:bg-white desktop:rounded-lg desktop:shadow-md desktop:p-1 desktop:justify-center desktop:mx-[7rem]">
        <div className="w-full flex-1">
          <UserAboutNavigationPanel
            showAboutHandler={showAboutHandler}
            showAbout={showAbout}
          />
        </div>
        <div className="w-full flex-1">
          {showAbout === "Overview" ? (
            <UserAboutOverview />
          ) : (
            <UserAboutOverview />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAbout;
