import { useState } from "react";
import Footer from "../../layout/Footer";
import NavigationBar from "../../layout/NavigationBar/NavigationBar";
import UserInfoPanel from "./components/UserInfoPanel";
import UserPosts from "./components/UserPosts";
import UserAbout from "./components/UserAbout/UserAbout";
import UserPhotos from "./components/UserPhotos";

const UserProfile = () => {
  const [showPosts, setShowPosts] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);

  const showPostsHandler = () => {
    setShowPosts(true);
    setShowAbout(false);
    setShowFriends(false);
    setShowPhotos(false);
  };
  const showAboutHandler = () => {
    setShowPosts(false);
    setShowAbout(true);
    setShowFriends(false);
    setShowPhotos(false);
  };
  const showFriendsHandler = () => {
    setShowPosts(false);
    setShowAbout(false);
    setShowFriends(true);
    setShowPhotos(false);
  };
  const showPhotosHandler = () => {
    setShowPosts(false);
    setShowAbout(false);
    setShowFriends(false);
    setShowPhotos(true);
  };

  return (
    <div className="bg-[#f0f2f5] h-screen">
      <NavigationBar />
      <div className="bg-[#f0f2f5] pb-4">
        <div className="bg-white largeDesktop:shadow-md largeDesktop:rounded-b-lg">
          <div className=" mt-[3.7rem] largeDesktop:px-[25rem]">
            <UserInfoPanel
              showAbout={showAbout}
              showAboutHandler={showAboutHandler}
              showFriends={showFriends}
              showFriendsHandler={showFriendsHandler}
              showPhotos={showPhotos}
              showPhotosHandler={showPhotosHandler}
              showPosts={showPosts}
              showPostsHandler={showPostsHandler}
            />
          </div>
        </div>

        <div>
          {showPosts && <UserPosts />}
          {showAbout && <UserAbout />}
          {showPhotos && <UserPhotos />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
