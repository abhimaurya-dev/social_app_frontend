import HomeFeed from "../features/HomeFeed/HomeFeed";
import NavigationBar from "../layout/NavigationBar/NavigationBar";
const Feed = () => {
  return (
    <div>
      <NavigationBar />
      <div className="w-full h-full bg-[#f0f2f5]">
        <HomeFeed />
      </div>
    </div>
  );
};

export default Feed;
