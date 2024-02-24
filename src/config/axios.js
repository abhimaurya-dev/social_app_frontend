import axios from "axios";
import { isJwtTokenExpired } from "../utils/isJwtTokenExpired";
import store from "../redux/store";
import { logout } from "../redux/reducers/authSlice";

const axiosConfig = axios.create({
  baseURL: "https://socialappbackend.vercel.app/api/v1/",

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": true,
  },
});

axiosConfig.interceptors.request.use(async (config) => {
  try {
    const refreshToken = sessionStorage.getItem("refresh-token");
    if (refreshToken === null) return config;
    if (isJwtTokenExpired(refreshToken)) {
      // call logout function
      const accessToken = localStorage.getItem("access-token");
      await axios({
        method: "post",
        url: "https://socialappbackend.vercel.app/api/v1/logout",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      store.dispatch(logout());
    }
    return config;
  } catch (error) {
    throw new Error(error);
  }
});

export default axiosConfig;
