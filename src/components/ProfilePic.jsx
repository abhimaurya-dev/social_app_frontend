// eslint-disable-next-line react/prop-types
const ProfilePic = ({ imgPath, height, width }) => {
  return (
    <div className={`w-[${height}] h-[${width}]`}>
      <img className={`object-fill rounded-full `} src={imgPath} alt="" />
    </div>
  );
};

export default ProfilePic;
