import { useState } from "react";
import ProfilePic from "../../../components/ProfilePic";

const PostCard = () => {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [wantToSharePost, setWantToSharePost] = useState(false);
  const [isPostSaved, setIsPostSaved] = useState(false);

  const postLikeHandler = () => {
    setIsPostLiked((state) => !state);
  };

  const wantToSharePostHandler = () => {
    setWantToSharePost((state) => !state);
  };

  const savePostHandler = () => {
    setIsPostSaved((state) => !state);
  };

  return (
    <>
      <div className="mt-1 mb-3 shadow-md">
        <div className="bg-white rounded-md ">
          <div className=" px-4 pt-4 flex justify-between items-center">
            <div className="flex gap-2">
              <ProfilePic
                imgPath={
                  "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
                }
                height={"2.8rem"}
                width={"2.8rem"}
              />
              <div>
                <p className="font-semibold">Abhishek Maurya</p>
                <div className="flex items-center gap-1">
                  <p className="text-sm text-gray-500">21 hours ago </p>
                  <div className="w-[0.15rem] h-[0.15rem] bg-gray-500 rounded-full"></div>
                  <p className="text-[1rem] text-gray-500 material-symbols-outlined">
                    public
                  </p>
                </div>
              </div>
            </div>
            <div
              role="button"
              onClick={savePostHandler}
              className="h-[2.5rem] w-[2.5rem] hover:bg-gray-200 flex items-center justify-center rounded-full bg-gray-100"
            >
              <span
                className={` ${
                  isPostSaved && "filled text-primary-color"
                } text-[1.5rem] text-gray-900 material-symbols-outlined`}
              >
                {isPostSaved ? "bookmark_added" : "bookmark_add"}
              </span>
            </div>
          </div>
          <div className=" mt-4 w-full pb-2 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/420176203_925523925611903_1087211056623125536_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Tb4Dcc7zM_EAX-SNi4T&_nc_ht=scontent.fdel1-4.fna&oh=00_AfAROHscx1YWnNXhDD4XalCyg1rHd2AArKMLXnL3sCtcKA&oe=65B13C4A"
              alt="Your Image Alt Text"
            />
          </div>
          <div className="px-4 mb-1">
            <div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined filled text-gray-600">
                    thumb_up
                  </span>
                  <span>8</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined filled text-gray-600">
                      chat_bubble
                    </span>
                    <span className="pb-2">1</span>
                  </div>
                  <div className="flex items-center gap-1 pb-1">
                    <span className="material-symbols-outlined">
                      prompt_suggestion
                    </span>
                    <span>2</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-1 border-t-[1px] w-[100%] border-gray-300" />
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="flex justify-between mt-2 pb-1">
                <div
                  role="button"
                  onClick={postLikeHandler}
                  className="flex hover:bg-gray-100 px-8 rounded-lg items-center gap-2"
                >
                  <span
                    className={`material-symbols-outlined filled ${
                      isPostLiked ? "text-primary-color" : "text-gray-600"
                    }`}
                  >
                    thumb_up
                  </span>
                  <span>Like</span>
                </div>
                <div
                  role="button"
                  className="flex ml-3 hover:bg-gray-100 px-6 rounded-lg items-center gap-1"
                >
                  <span className="material-symbols-outlined filled text-gray-600">
                    chat_bubble
                  </span>
                  <span className="pb-2">Comment</span>
                </div>
                <div
                  role="button"
                  onClick={wantToSharePostHandler}
                  className="flex hover:bg-gray-100 ml-2 px-8 rounded-lg items-center gap-1 pb-1"
                >
                  <span tabIndex={0} className="material-symbols-outlined">
                    prompt_suggestion
                  </span>
                  <span>Share</span>
                </div>
              </div>
              {wantToSharePost && (
                <ul
                  tabIndex={0}
                  className="z-[4] mt-2 bg-white rounded-lg border-[0.01rem] w-[23rem] px-4  py-2 shadow-xl menu menu-sm dropdown-content "
                >
                  <div
                    role="button"
                    className="text-[1rem] font-semibold rounded-md px-2 py-2 hover:bg-gray-100"
                  >
                    <li>Copy Link</li>
                  </div>
                  <div
                    role="button"
                    className="text-[1rem] font-semibold rounded-md px-2 py-2 hover:bg-gray-100"
                  >
                    <li>Share to Feed</li>
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
