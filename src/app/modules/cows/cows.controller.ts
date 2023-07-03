import { NextFunction, Request, Response } from "express";
import {
  createCowService,
  deleteCowService,
  getCowsService,
  getSingleCowService,
  updateCowService,
} from "./cows.service";
import pick from "../../../shared/pick";
import { paginationFields } from "../../../constants/pagination";

export const getCows = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters = pick(req.query, ["searchTerm", "minPrice", "maxPrice"]);
    // console.log(filters);

    const paginationOptions = pick(req.query, paginationFields);

    // console.log(paginationOptions);

    const result = await getCowsService(filters, paginationOptions);
    // const result = await getCowsService( );

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cows retrieved successfully",
      meta:result.meta,
      data: result.data,
    });
  } catch (err) {
    next(err);
  }
};

export const createCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const result = await createCowService(userData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cows created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const getSingleCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const result = await getSingleCowService(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cow retrieved successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const updateCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    console.log(id, updatedData);
    const result = await updateCowService(id, updatedData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cow updated successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const deleteCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;

    const result = await deleteCowService(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Cow deleted successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
