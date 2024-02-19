import axios from "../config/axios";

export const refreshAccessToken = async (userId) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const response = await axios({
    method: "post",
    url: "/refreshAuthToken",
    withCredentials: true,
    data: {
      userId: userId,
    },
  });
  console.log(response.body);
};
