import { jwtDecode } from "jwt-decode";
export const isAccessTokenExpired = (accessToken) => {
  if (!accessToken) return true;
  const decodedToken = jwtDecode(accessToken);
  const expirationTime = decodedToken.exp * 1000;
  return expirationTime < Date.now();
};
