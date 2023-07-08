import config from "../../../config";
import { IAdmin } from "./auth.interface";
import { Admin } from "./auth.model";
import bcrypt from 'bcrypt';
import {  generateUserId } from "./auth.utils";
import ApiError from "../../../errors/ApiError";
import { Secret } from "jsonwebtoken";
var jwt = require('jsonwebtoken');

export const createUserService = async (payload: any): Promise<IAdmin> => {
  // console.log(payload);
  // Hash password
  // payload.password = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds))
  payload.id = await generateUserId();
  // console.log(payload.id);
  const results = await Admin.create(payload);

  return results;
};


export const loginUserService = async (payload: any) => {
  const { id, password } = payload;
  // console.log(payload);

  const isAdminExist = await Admin.findOne({ id }, { id: 1, password: 1, role: 1 });
  // console.log(isAdminExist);

  if (!isAdminExist) {
    throw new ApiError(400, 'Admin not exist');
  }

  // Match password
  const isPasswordMatched = await bcrypt.compare(password, isAdminExist?.password);
  // console.log(isPasswordMatched);

  if (!isPasswordMatched) {
    throw new ApiError(500, 'Password not matched');
  }

  // create access token & refresh token
  const accessToken = jwt.sign({
    id: isAdminExist?.id,
    role: isAdminExist?.role
  }, config.jwt.secret as Secret, {
    expiresIn: config.jwt.expires_in
  });

  const refreshToken = jwt.sign({
    id: isAdminExist?.id,
    role: isAdminExist?.role
  }, config.jwt.refresh_secret as Secret, {
    expiresIn: config.jwt.refresh_expires_in
  });

  return {
    accessToken,
    refreshToken
  }

};

export const getRefreshTokenService = async (payload: any) => {
  
};

