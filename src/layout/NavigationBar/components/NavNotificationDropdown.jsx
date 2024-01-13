import { useState } from "react";
import NotificationCard from "./NotificationCard";
const NavNotificationDropdown = () => {
  const [allNotification, setAllNotification] = useState(false);

  const showNotificationHandler = (e) => {
    if (e.target.value === "all") {
      return setAllNotification(true);
    }
    if (e.target.value === "unread") {
      return setAllNotification(false);
    }
  };
  return (
    <div>
      <div className="z-[4] mt-2 bg-white rounded-lg border-[0.01rem] w-[23rem] p-2 shadow-lg menu menu-sm dropdown-content">
        <div tabIndex={1} className="mx-1 px-2 my-2">
          <div className="flex justify-between items-center">
            <p className="font-bold text-2xl">Notifications</p>
            <div className="h-[2.2rem] w-[2.2rem] flex items-center justify-center rounded-full bg-transparent hover:bg-gray-100 cursor-pointer">
              <span className="text-[1.5rem] text-gray-700 material-symbols-outlined">
                more_horiz
              </span>
            </div>
          </div>
          <div className="flex justify-start gap-[0.4] mt-2">
            <button
              value={"all"}
              onClick={showNotificationHandler}
              className={`rounded-full font-semibold text-[1rem] px-4 py-2 ${
                allNotification && "bg-tertiary-color"
              }`}
            >
              All
            </button>
            <button
              value={"unread"}
              onClick={showNotificationHandler}
              className={`rounded-full text-[1rem] font-semibold px-4 py-2 ${
                !allNotification && "bg-tertiary-color"
              }`}
            >
              Unread
            </button>
          </div>
          <div className="mt-3">
            <NotificationCard
              imgPath={
                "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
              }
              notification={"You have a new friend suggestion: Vikas Yadav"}
              recievedTime={"2 days ago"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavNotificationDropdown;
