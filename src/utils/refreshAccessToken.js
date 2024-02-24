import axios from "../config/axios";

export const refreshAccessToken = async (userId) => {
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const response = await axios({
      method: "post",
      url: "/refreshAuthToken",
      withCredentials: true,
      data: {
        userId: userId,
      },
    });
    return response.data.accessToken;
  } catch (error) {
    return new Error(error);
  }
};
