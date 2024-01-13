// import { Link } from "react-router-dom";
import ProfilePic from "../../components/ProfilePic";
import NavNotificationDropdown from "./components/NavNotificationDropdown";
import NavProfileDropdown from "./components/NavProfileDropdown";

const NavigationBar = () => {
  return (
    <div className="w-full flex bg-white justify-between py-2 px-5 shadow-md">
      <div className="flex items-center">
        <img
          className="h-[2.6rem] w-[2.6rem] mr-2"
          src="src/assets/fb-logo.png"
          alt="logo"
        />
        <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
          <span className="text-[1.5rem] text-gray-500 material-symbols-outlined">
            search
          </span>
        </div>
        <span className="pl-6 text-[2rem] text-gray-500 material-symbols-outlined">
          menu
        </span>
      </div>
      {/* <NavSearch /> */}
      <div className="flex gap-2">
        <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
          <span className="text-[1.5rem] text-gray-900 material-symbols-outlined">
            add
          </span>
        </div>
        <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
          <span className="text-[1.5rem] text-gray-900 material-symbols-outlined">
            chat
          </span>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100"
          >
            <span className="text-[1.5rem] text-gray-900 material-symbols-outlined">
              notifications
            </span>
          </div>
          <NavNotificationDropdown />
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <ProfilePic
              imgPath={
                "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
              }
              height={"2.6rem"}
              width={"2.6rem"}
            />
          </div>
          <NavProfileDropdown />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
