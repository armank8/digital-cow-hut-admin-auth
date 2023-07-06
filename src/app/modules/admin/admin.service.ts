import config from "../../../config";
import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";
import bcrypt from 'bcrypt';
import { generateAdminId } from "./admin.utils";


export const createAdminService = async(payload: any): Promise<IAdmin> => {
  // console.log(payload);
  // const { password } = payload;
  // Hash password
  // payload.password = await bcrypt.hash(payload.password, Number(config.bcrypt_salt_rounds))
  payload.id= await generateAdminId();
  // console.log(payload.id);
  const results = await Admin.create(payload);
  
  return results;

  // console.log(password);


  // if(!results){
  //     throw new ApiError(400,'Failed to create user');
  // }
};


export const loginAdminService = (payload: any): Promise<IAdmin> => {
  // const results = Admin.create(payload);
  console.log(payload);
  // console.log(results);

  // if(!results){
  //     throw new ApiError(400,'Failed to create user');
  // }
  // return results;
};


