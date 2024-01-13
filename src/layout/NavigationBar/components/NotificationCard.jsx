import ProfilePic from "../../../components/ProfilePic";

// eslint-disable-next-line react/prop-types
const NotificationCard = ({ imgPath, notification, recievedTime, unread }) => {
  return (
    <div>
      <div className="flex gap-2 justify-between items-center">
        <div className="h-[4rem] w-[4rem] mt-4">
          <ProfilePic imgPath={imgPath} height={"3rem"} width={"3rem"} />
        </div>
        <div className="flex flex-col justify-between items-start">
          <p className="text-[0.9rem]">{notification}</p>
          <p className={`text-[0.8rem] ${unread && "text-primary-color"}`}>
            {recievedTime}
          </p>
        </div>
        <span
          className={`material-symbols-outlined ${
            unread && "text-primary-color"
          }`}
        >
          fiber_manual_record
        </span>
      </div>
    </div>
  );
};

export default NotificationCard;
