import { useEffect, useRef, useState } from "react";
import HomeFeed from "../features/HomeFeed/HomeFeed";
import Footer from "../layout/Footer";
import NavigationBar from "../layout/NavigationBar/NavigationBar";
const Feed = () => {
  const navComponentRef = useRef(null);
  const [navComponentHeight, setNavComponentHeight] = useState(0);

  useEffect(() => {
    if (navComponentRef.current) {
      setNavComponentHeight(
        100 - (navComponentRef.current.offsetHeight / window.innerHeight) * 100
      );
    }
  }, [navComponentHeight]);

  return (
    <div className="overflow-x-hidden">
      <div ref={navComponentRef}>
        <NavigationBar />
      </div>
      {console.log(navComponentHeight)}
      <div className={`w-full bg-[#f0f2f5]`}>
        <HomeFeed />
      </div>
      <Footer />
    </div>
  );
};

export default Feed;
