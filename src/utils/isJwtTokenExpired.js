import { jwtDecode } from "jwt-decode";
export const isJwtTokenExpired = (token) => {
  if (!token) return true;
  const decodedToken = jwtDecode(token);
  const expirationTime = decodedToken.exp * 1000;
  return expirationTime < Date.now();
};
