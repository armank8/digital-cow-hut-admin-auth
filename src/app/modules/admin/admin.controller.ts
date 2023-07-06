import { NextFunction, Request, Response } from 'express';
import { createAdminService, loginAdminService } from './admin.service';



export const createAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await createAdminService(userData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Admin Created successfully",
      data: result
    })
  } catch (err) {
    next(err);
  }
};

export const loginAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = req.body;
    const result = await loginAdminService(userData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: result
    })
  } catch (err) {
    next(err);
  }
};







