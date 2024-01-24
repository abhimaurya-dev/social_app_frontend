import PostCard from "../../../components/PostCard";
import UserIntroCard from "./UserIntroCard";

const UserPosts = () => {
  return (
    <div className="mt-5 mx-4 ">
      <div className="desktop:flex desktop:gap-4 largeDesktop:pr-[20rem] largeDesktop:pl-[24rem] desktop:px-[15rem]">
        <div className="desktop:w-[25rem]">
          <UserIntroCard />
        </div>
        <div className="mt-3 desktop:mt-0 desktop:w-[40rem] ">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
