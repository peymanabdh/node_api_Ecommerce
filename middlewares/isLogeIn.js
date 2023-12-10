import { getTokenFromHeader } from "../utils/getTokenFrom.js";
import { verifyToken } from "../utils/verifyToken.js";

export const isLogedIn = (req, res, next) => {
  const token = getTokenFromHeader(req);
  const decodeToken = verifyToken(token);
  if (!decodeToken) {
    throw new Error("Invalid / expierd Token");
  } else {
    req.userAuthId = decodeToken?.id;
    next();
  }
};
