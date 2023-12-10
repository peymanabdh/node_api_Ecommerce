import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
  return jwt.verify(token, "qazxsw!@#", (err, decode) => {
    if (err) {
      return false;
    } else {
      return decode;
    }
  });
};
