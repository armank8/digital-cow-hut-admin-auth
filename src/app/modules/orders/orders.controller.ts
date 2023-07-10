import { NextFunction, Request, Response } from "express";
import { createOrdersService, getOrdersService } from "./orders.service";

export const createOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const ordersData = req.body;
    const result = await createOrdersService(ordersData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Orders created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // console.log(req.user);
    const result = await getOrdersService(req.user);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Orders retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
