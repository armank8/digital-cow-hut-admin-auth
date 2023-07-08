import config from "../../../config";

import bcrypt from 'bcrypt';
import ApiError from "../../../errors/ApiError";
import { Secret } from "jsonwebtoken";
import { User } from "../user/user.model";
import { IUser } from "../user/user.interface";
var jwt = require('jsonwebtoken');

export const createUserService = async (payload: any): Promise<IUser> => {
  // console.log(payload);
  // Hash password
  // payload.password = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds))
  // payload.id = await generateUserId();
  // console.log(payload.id);
  const results = await User.create(payload);

  return results;
};


export const loginUserService = async (payload: any) => {
  const { phoneNumber, password } = payload;
  // console.log(payload);

  const isAdminExist = await User.findOne({ phoneNumber }, { _id: 1, password: 1, role: 1 });
  // console.log(isAdminExist);

  if (!isAdminExist) {
    throw new ApiError(400, 'User not exist');
  }

  // Match password
  const isPasswordMatched = await bcrypt.compare(password, isAdminExist?.password);
  // console.log(isPasswordMatched);

  if (!isPasswordMatched) {
    throw new ApiError(500, 'Password not matched');
  }

  // create access token & refresh token
  const accessToken = jwt.sign({
    id: isAdminExist?._id,
    role: isAdminExist?.role
  }, config.jwt.secret as Secret, {
    expiresIn: config.jwt.expires_in
  });

  const refreshToken = jwt.sign({
    id: isAdminExist?._id,
    role: isAdminExist?.role
  }, config.jwt.refresh_secret as Secret, {
    expiresIn: config.jwt.refresh_expires_in
  });

  return {
    accessToken,
    refreshToken
  }

};

export const getRefreshTokenService = async (token: string) => {
  //verify token
  let verifiedToken=null ;
  try {
    verifiedToken = jwt.verify(token,config.jwt.refresh_secret);
    // console.log(verifiedToken);

  } catch (err) {
    throw new ApiError(401,'Invalid refresh token');
  }

  const {id,role} = verifiedToken;

  //checking deleted user's refresh token
  const isUserExist = await User.findOne({_id:id});
  // console.log(isUserExist);

  if(!isUserExist){
    throw new ApiError(404,'User doesnt exist');
  }

  //generate new token
  const newAccessToken = jwt.sign({
    id: isUserExist?._id,
    role: isUserExist?.role
  }, config.jwt.secret as Secret, {
    expiresIn: config.jwt.expires_in
  });

  return {
    accessToken : newAccessToken
  }
};


