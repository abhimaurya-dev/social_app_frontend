const NavNotificationDropdown = () => {
  return (
    <div>
      <ul className="z-[4] mt-1 bg-white rounded-lg border-[0.01rem] w-[23rem] p-2 shadow-lg menu menu-sm dropdown-content">
        <div tabIndex={1} role="button" className="mx-1 px-2 my-2"></div>
        <div className="mx-[0.1rem] mt-3" role="button"></div>
      </ul>
    </div>
  );
};

export default NavNotificationDropdown;
