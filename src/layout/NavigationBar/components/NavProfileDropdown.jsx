import ProfilePic from "../../../components/ProfilePic";
import axios from "../../../config/axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  logout,
  refreshAuthToken,
  selectAuth,
} from "../../../redux/reducers/authSlice";
import { isAccessTokenExpired } from "../../../utils/isAccessTokenExpired";
import { refreshAccessToken } from "../../../utils/refreshAccessToken";

const NavProfileDropdown = () => {
  const auth = useSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    if (isAccessTokenExpired(auth.accessToken)) {
      const accessToken = await refreshAccessToken(auth.user._id);
      dispatch(refreshAuthToken(accessToken));
    }
    await axios({
      method: "post",
      url: "/logout",
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });
    dispatch(logout());
    navigate("/");
  };

  return (
    <div>
      <ul className="z-[4] mt-2 bg-white rounded-lg border-[0.01rem] w-[23rem] p-2 shadow-lg menu menu-sm dropdown-content">
        <div tabIndex={1} role="button" className="mx-1 px-2 my-2">
          <li className="flex flex-col px-3 rounded-md w-full shadow-md border-[0.01rem] shadow-gray-300">
            <div className="flex items-center py-3 mt-2 hover:bg-gray-100">
              <ProfilePic
                imgPath={
                  "https://scontent.fdel63-1.fna.fbcdn.net/v/t39.30808-6/362671347_829206822078167_18836369532297524_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=K0M7vYT3crIAX8CRxEN&_nc_ht=scontent.fdel63-1.fna&oh=00_AfBDA4Ml9iF_oKcg24DWIs-qmvC2wVYz-S99yybI6iPsKw&oe=65A6C8C1"
                }
                height={"2.6rem"}
                width={"2.6rem"}
              />
              <p className="font-semibold text-lg">Abhishek Maurya</p>
            </div>
            <hr className=" px-4 mt-1 border-t-[1px] w-[100%] border-gray-300" />
            <p className="text-primary-color mb-2 leading-[1.8rem] hover:bg-gray-100 text-[1rem] font-semibold">
              See all profiles
            </p>
          </li>
        </div>
        <div className="mx-[0.1rem] mt-3" role="button">
          <li
            tabIndex={2}
            className="px-1 py-1 rounded-md hover:bg-gray-100 flex flex-row items-center justify-between "
          >
            <div>
              <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
                <span className="text-[1.5rem] text-gray-700 material-symbols-outlined">
                  settings
                </span>
              </div>
              <p className="text-[1rem]">Settings & Privacy</p>
            </div>
            <span className=" text-2xl material-symbols-outlined">
              arrow_forward_ios
            </span>
          </li>
          <li
            tabIndex={2}
            className="px-1 py-1 rounded-md hover:bg-gray-100 flex flex-row items-center justify-between "
          >
            <div>
              <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
                <span className="text-[1.5rem] text-gray-700 material-symbols-outlined">
                  help
                </span>
              </div>
              <p className="text-[1rem]">Help & support</p>
            </div>
            <span className=" text-2xl material-symbols-outlined">
              arrow_forward_ios
            </span>
          </li>
          <li
            tabIndex={2}
            className="px-3 py-2 rounded-md hover:bg-gray-100 flex flex-row items-center"
          >
            <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-[1.5rem] text-gray-700 material-symbols-outlined">
                rate_review
              </span>
            </div>
            <p className="text-[1rem]">Give feedback</p>
          </li>
          <li
            tabIndex={2}
            onClick={logoutHandler}
            className="px-3 py-2 rounded-md hover:bg-gray-100 flex flex-row items-center"
          >
            <div className="h-[2.5rem] w-[2.5rem] flex items-center justify-center rounded-full bg-gray-100">
              <span className="text-[1.5rem] text-gray-700 material-symbols-outlined">
                logout
              </span>
            </div>
            <p className="text-[1rem]">Log Out</p>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavProfileDropdown;
