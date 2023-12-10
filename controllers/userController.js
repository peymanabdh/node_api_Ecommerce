import User from "../model/User.js";
import bcr from "bcryptjs";
import asyncHndler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import { getTokenFromHeader } from "../utils/getTokenFrom.js";
import { verifyToken } from "../utils/verifyToken.js";

export const registerUserCtrl = asyncHndler(async (req, res) => {
  const { fullname, email, password } = req.body;
  //is user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    // res.json({
    //   msg: "user exists",
    // });
    throw new Error("user exists");
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
});
export const loginUserCtrl = asyncHndler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await bcr.compare(password, findUser?.password))) {
    res.json({
      status: "success",
      msg: "login successfully",
      findUser,
      token: generateToken(findUser?._id),
    });
  } else {
    // res.json({
    //   msg: "invalid loged in",
    // });
    throw new Error("invalid login");
  }
});

export const getProfileUser = asyncHndler(async (req, res) => {
  const token = getTokenFromHeader(req);
  const verified = verifyToken(token);
  console.log(req);
  res.json({
    msg: "Wecome profile",
  });
});
