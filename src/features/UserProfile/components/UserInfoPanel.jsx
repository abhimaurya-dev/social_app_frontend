/* eslint-disable react/prop-types */
const UserInfoPanel = ({
  showPostsHandler,
  showAboutHandler,
  showFriendsHandler,
  showPhotosHandler,
  showPosts,
  showAbout,
  showFriends,
  showPhotos,
}) => {
  return (
    <div className="flex flex-col items-center  largeDesktop:items-start bg-white shadow-md largeDesktop:shadow-none">
      <div className="w-full h-[12rem] largeDesktop:h-[30rem]">
        <img
          className="object-cover w-full h-full rounded-b-lg shadow-lg"
          src="https://scontent.fdel1-2.fna.fbcdn.net/v/t39.30808-6/257428141_432986935033493_3222144330199605733_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_ohc=xzX_u4qbB2wAX9tFSCm&_nc_ht=scontent.fdel1-2.fna&oh=00_AfBiFEoM4WQkLuYhMvv5Cno_wGa2AZSRPRn_KX5aSot5gQ&oe=65B3F117"
          alt="user cover photo"
        />
      </div>
      <div className="h-[12rem] border-4 border-white rounded-full mt-[-5rem] largeDesktop:ml-[2rem] w-[12rem] object-cover ">
        <img
          className="h-full w-full rounded-full"
          src="https://scontent.fdel1-4.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=eEJu7VTo7WMAX9rjnxg&_nc_ht=scontent.fdel1-4.fna&oh=00_AfAPQ3sjQuuhhlEa729P0yp7LFoiYsZlGr7bXjI5SL7Zng&oe=65B4A081"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center w-full justify-between">
        <div className="flex flex-col largeDesktop:mt-[-6rem] largeDesktop:pl-[15rem] largeDesktop:w-full largeDesktop:flex-row justify-between items-center largeDesktop:items-start">
          <div className="flex flex-col items-center largeDesktop:items-start">
            <p className="font-bold text-[2rem] mt-1">Abhishek Maurya</p>
            <p className="text-md font-semibold text-gray-500">6 friends</p>
          </div>
          <button className=" w-[10rem] py-2 mt-4 flex justify-center gap-1 font-semibold rounded-lg bg-gray-200">
            <span className="material-symbols-outlined filled">edit</span>Edit
            profile
          </button>
        </div>
        <div className="w-full px-5 mt-2 largeDesktop:mt-[3rem] largeDesktop:w-full">
          <hr className="border-t-[1px] mt-5 w-[100%] border-gray-300" />
          <div className="flex mt-3 mb-1 largeDesktop:px-[10rem] justify-between">
            <div
              onClick={showPostsHandler}
              className={`hover:bg-gray-200 ${
                showPosts && "border-b-2 border-primary-color"
              } cursor-pointer hover:rounded-md px-4 largeDesktop:px-[5rem] py-2 `}
            >
              Posts
            </div>
            <div
              onClick={showAboutHandler}
              className={`hover:bg-gray-200 ${
                showAbout && "border-b-2 border-primary-color"
              } cursor-pointer hover:rounded-md px-4 largeDesktop:px-[5rem] py-2 `}
            >
              About
            </div>
            <div
              onClick={showFriendsHandler}
              className={`hover:bg-gray-200 ${
                showFriends && "border-b-2 border-primary-color"
              } cursor-pointer hover:rounded-md px-4 largeDesktop:px-[5rem] py-2 `}
            >
              Friends
            </div>
            <div
              onClick={showPhotosHandler}
              className={`hover:bg-gray-200 ${
                showPhotos && "border-b-2 border-primary-color"
              } cursor-pointer hover:rounded-md px-4 largeDesktop:px-[5rem] py-2 `}
            >
              Photos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoPanel;
