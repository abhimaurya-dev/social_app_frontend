import ProfilePic from "../../../components/ProfilePic";
const NavigationSideBar = () => {
  return (
    <div className="overflow-hidden">
      <ul>
        <li className="flex gap-3 items-center px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-200">
          <ProfilePic
            imgPath={
              "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
            }
            height={"2.5rem"}
            width={"2.5rem"}
          />
          <p>Abhishek Maurya</p>
        </li>
        <li className="flex gap-3 items-center mt-1 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-[2.2rem] material-symbols-outlined">group</span>
          <p>Find Friends</p>
        </li>
        <li className="flex gap-3 items-center mt-1 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-[2.2rem] material-symbols-outlined">
            bookmark
          </span>
          <p>Saved</p>
        </li>
        <li className="flex gap-3 items-center mt-1 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-[2.2rem] material-symbols-outlined">
            groups
          </span>
          <p>Groups</p>
        </li>
        <li className="flex gap-3 items-center mt-1 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-[2.2rem] material-symbols-outlined">chat</span>
          <p className="pb-1">Messenger</p>
        </li>
        <li className="flex gap-3 items-center mt-1 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-[2.2rem] material-symbols-outlined">
            video_library
          </span>
          <p>Videos</p>
        </li>
        <li className="flex gap-3 items-center mt-1 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-[2.2rem] material-symbols-outlined">feed</span>
          <p>Feeds</p>
        </li>
        <li className="flex gap-3 items-center mt-1 px-4 py-3 rounded-lg cursor-pointer hover:bg-gray-200">
          <span className="text-[2.2rem] material-symbols-outlined">
            event_available
          </span>
          <p>Events</p>
        </li>
      </ul>
    </div>
  );
};

export default NavigationSideBar;
