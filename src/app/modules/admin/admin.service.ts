import { IAdmin } from "./admin.interface";
import { Admin } from "./admin.model";


export const createAdminService = (payload: any): Promise<IAdmin> => {
  const results = Admin.create(payload);
  // console.log(results);

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


