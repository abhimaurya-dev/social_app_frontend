import CreatePost from "./components/CreatePost";
import PostCard from "../../components/PostCard";

const HomeFeed = () => {
  return (
    <div className="">
      <div className="px-3 ">
        <CreatePost />
        <div className="pb-2">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default HomeFeed;
