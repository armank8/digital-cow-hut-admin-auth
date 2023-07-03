import { NextFunction, Request, Response } from "express";
import { AuthSignupService, deleteUserService, getSingleUserService, getUsersService, updateUserService } from "./user.service";


export const authSignup =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const userData = req.body;
        const result = await AuthSignupService(userData);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"Users Created successfully",
            data:result 
        })
    } catch (err) {      
        next(err);
    } 
}

export const getUsers =async(req:Request,res:Response,next:NextFunction)=>{
    try {        
        const result = await getUsersService();
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"Users retrieved successfully",
            data:result 
        })
    } catch (err) {      
        next(err);
    } 
}
export const getSingleUser =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        const result = await getSingleUserService(id);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"User retrieved successfully",
            data:result 
        })
    } catch (err) {   
        next(err);
    } 
}

export const updateUser =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body;
        console.log(id,updatedData);
        const result = await updateUserService(id,updatedData);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"User updated successfully",
            data:result 
        })
    } catch (err) {   
        next(err);
    } 
}
export const deleteUser =async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const id = req.params.id;
        
        const result = await deleteUserService(id);
        res.status(200).json({
            success:true,
            statusCode:200,
            message:"User deleted successfully",
            data:result 
        })
    } catch (err) {   
        next(err);
    } 
}