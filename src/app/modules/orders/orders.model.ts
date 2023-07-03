import { Schema, model } from "mongoose";
import { IOrders } from "./orders.interface";

const ordersSchema = new Schema<IOrders>(
  {
    cow: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Cows",
    },
    buyer: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// 3. Create a Model.
export const Orders = model<IOrders>("Orders", ordersSchema);
