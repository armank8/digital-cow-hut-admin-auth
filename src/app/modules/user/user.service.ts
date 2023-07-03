// import ApiError from "../../../errors/ApiError";
import { IUser } from "./user.interface";
import { User } from "./user.model";

export const AuthSignupService = (payload: any): Promise<IUser> => {
  const results = User.create(payload);
  // console.log(results);

  // if(!results){
  //     throw new ApiError(400,'Failed to create user');
  // }
  return results;
};

export const getUsersService = () => {
  const data = User.find({});
  return data;
};
export const getSingleUserService = (payload: string) => {
  const data = User.find({ _id: payload });
  //   console.log(data);
  return data;
};
export const updateUserService = async (id: string, payload: any) => {
  const data = await User.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return data;
};

export const deleteUserService = async (id: string) => {
  const data = await User.findOneAndDelete({ _id: id }, {
    new: true,
  });
  return data;
};
