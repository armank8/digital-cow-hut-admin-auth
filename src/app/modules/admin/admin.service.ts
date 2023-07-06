import config from "../../../config";
import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";
import bcrypt from 'bcrypt';
import { generateAdminId } from "./admin.utils";
import ApiError from "../../../errors/ApiError";
var jwt = require('jsonwebtoken');

export const createAdminService = async (payload: any): Promise<IAdmin> => {
  // console.log(payload);
  // Hash password
  // payload.password = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds))
  payload.id = await generateAdminId();
  // console.log(payload.id);
  const results = await Admin.create(payload);

  return results;
};


export const loginAdminService = async (payload: any) => {
  const { id, password } = payload;
  console.log(payload);

  const isAdminExist = await Admin.findOne({ id }, { id: 1, password: 1,role:1 });
  console.log(isAdminExist);

  if (!isAdminExist) {
    throw new ApiError(400, 'Admin not exist');
  }

  // Match password
  const isPasswordMatched = await bcrypt.compare(password, isAdminExist?.password);
  console.log(isPasswordMatched);

  if (!isPasswordMatched) {
    throw new ApiError(500, 'Password not matched');
  }

  // create access token & refresh token
  const accessToken = jwt.sign({
    id:isAdminExist?.id,
    role:isAdminExist?.role
  },);



};


