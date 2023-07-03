import { Types } from "mongoose";


export type IOrders = {
  cow:Types.ObjectId;
  buyer:Types.ObjectId;
};
