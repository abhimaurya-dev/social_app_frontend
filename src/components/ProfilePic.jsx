// eslint-disable-next-line react/prop-types
const ProfilePic = ({ imgPath, height, width }) => {
  return (
    <div>
      <img
        className={`h-[${height}] w-[${width}] rounded-full `}
        src={imgPath}
        alt=""
      />
    </div>
  );
};

export default ProfilePic;
