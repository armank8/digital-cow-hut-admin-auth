// import ApiError from "../../../errors/ApiError";

import mongoose from "mongoose";
import ApiError from "../../../errors/ApiError";
import globalErrorHandler from "../../middlewares/globalErrorHandler";
import { Cows } from "../cows/cows.model";
import { User } from "../user/user.model";
import { IOrders } from "./orders.interface";
import { Orders } from "./orders.model";

export const createOrdersService = async (payload: any) => {
  // console.log(payload.buyer);
  // console.log(payload.cow);
  const buyerData = await User.find({ _id: payload.buyer });
  const cowData = await Cows.find({ _id: payload.cow });
  const sellerId = cowData[0].seller.toString();
  const sellerData = await User.find({ _id: sellerId });
  // console.log(sellerData);
  // console.log(buyerData[0].budget, cowData[0].price);
  // console.log(cowData[0].seller.toString());

  if (buyerData[0].budget < cowData[0].price) {
    throw new ApiError(400, `Buyer has less money than the cow price`);
  }

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const cowsLabelUpdate = await Cows.findByIdAndUpdate(
      { _id: payload.cow },
      { label: "sold out" },
      { new: true, session }
    );
    console.log(cowsLabelUpdate);

    if (!cowsLabelUpdate) {
      throw new ApiError(400, "Failed to update cows data");
    }

    const buyerNewBudget = buyerData[0].budget - cowData[0].price;
    // console.log(buyerNewBudget);
    const buyerBudgetUpdate = await User.findByIdAndUpdate(
      { _id: payload.buyer },
      { budget: buyerNewBudget },
      { new: true, session }
    );

    if (!buyerBudgetUpdate) {
      throw new ApiError(400, "Failed to update buyer data");
    }
    // // console.log(buyerBudgetUpdate);

    //seller's income update
    const sellerNewIncome = sellerData[0].income + cowData[0].price;
    // console.log(sellerNewIncome);
    const sellerIncomeUpdate = await User.findByIdAndUpdate(
      { _id: sellerId },
      { income: sellerNewIncome },
      { new: true, session }
    );

    if (!sellerIncomeUpdate) {
      throw new ApiError(400, "Failed to update seller data");
    }
    const results = await Orders.create([payload], { session });

    if (!results) {
      throw new ApiError(400, "Failed to create order");
    }

    await session.commitTransaction();
    await session.endSession();

    return results;
    // console.log(sellerIncomeUpdate);
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }

  // const results = Orders.create(payload);
  // console.log(results);

  // if(!results){
  //     throw new ApiError(400,'Failed to create user');
  // }
  // return results;
};

export const getOrdersService = () => {
  const data = Orders.find({}).populate(["cow", "buyer"]);
  return data;
};
