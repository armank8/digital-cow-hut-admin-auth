import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";
import bcrypt from 'bcrypt';


export const createAdminService = (payload: any): Promise<IAdmin> => {
  console.log(payload);
  // const results = Admin.create(payload);

  // console.log(results);
  // Hash password
  
  // if(!results){
  //     throw new ApiError(400,'Failed to create user');
  // }
  // return results;
};
export const loginAdminService = (payload: any): Promise<IAdmin> => {
  const results = Admin.create(payload);
  // console.log(results);

  // if(!results){
  //     throw new ApiError(400,'Failed to create user');
  // }
  return results;
};


