import User from "../model/User.js";
import bcr from "bcryptjs";
export const registerUserCtrl = async (req, res) => {
  const { fullname, email, password } = req.body;
  //is user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.json({
      msg: "user exists",
    });
  } else {
    //hash password
    const salt = await bcr.genSalt(10);
    const hashPassword = await bcr.hash(password, salt);
    //create user
    const userCreate = await User.create({
      fullname,
      email,
      password: hashPassword,
    });
    res.status(201).json({
      msg: "user creatsed",
    });
  }
};
export const loginUserCtrl = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await bcr.compare(password, findUser?.password))) {
    res.json({
      status: success,
      msg: "login successfully",
      userLogin,
    });
  } else {
    res.json({
      msg: "loged in",
    });
  }
};
