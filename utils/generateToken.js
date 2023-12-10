import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "qazxsw!@#", { expiresIn: "3d" });
};

export default generateToken;