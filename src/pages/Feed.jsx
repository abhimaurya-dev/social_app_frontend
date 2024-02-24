import { useEffect, useState } from "react";
import HomeFeed from "../features/HomeFeed/HomeFeed";
import Footer from "../layout/Footer";
import NavigationBar from "../layout/NavigationBar/NavigationBar";
import NavigationSideBar from "../features/HomeFeed/components/NavigationSideBar";
import ContactsRightSideBar from "../features/HomeFeed/components/ContactsRightSideBar";

const Feed = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
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
    <div>
      <div>
        <NavigationBar />
      </div>
      <div
        className={`${windowSize > 1024 && "flex "}  mt-[3.6rem] bg-[#f0f2f5] `}
      >
        {windowSize >= 1024 && (
          <div
            className={`
            "desktop:w-[18vw] laptop:w-[14vw] h-screen fixed left-0 pt-6 bg-[#f0f2f5]"
          `}
          >
            <NavigationSideBar />
          </div>
        )}
        <div
          className={`${
            windowSize >= 1024 &&
            "laptop:w-[64vw] desktop:w-[68vw] pt-2 laptop:mx-[14vw] desktop:mx-[14vw] largeDesktop:mx-[18vw] desktop:px-[15vw] laptop:px-[9vw] overflow-y-auto bg-[#f0f2f5]"
          }`}
        >
          <HomeFeed />
        </div>
        {windowSize >= 1024 && (
          <div
            className={`
            "desktop:w-[18vw] laptop:w-[14vw] p-4 fixed right-0 h-screen bg-[#f0f2f5]"
           `}
          >
            <ContactsRightSideBar />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Feed;
