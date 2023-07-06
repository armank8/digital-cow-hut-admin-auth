import config from "../../../config";
import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";
import bcrypt from 'bcrypt';


export const createAdminService = async(payload: any): Promise<IAdmin> => {
  // console.log(payload);
  // const { password } = payload;
  // Hash password
  payload.password = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds))
  const results = await Admin.create(payload);

  // console.log(password);


  // if(!results){
  //     throw new ApiError(400,'Failed to create user');
  // }
  return results;
};
export const loginAdminService = (payload: any): Promise<IAdmin> => {
  const results = Admin.create(payload);
  // console.log(results);

  // if(!results){
  //     throw new ApiError(400,'Failed to create user');
  // }
  return results;
};


