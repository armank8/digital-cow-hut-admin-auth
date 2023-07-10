import express from "express";
import { createOrder, getOrders, getSingleOrder } from "./orders.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/",auth(ENUM_USER_ROLE.BUYER), createOrder);
router.get("/",auth(ENUM_USER_ROLE.ADMIN,ENUM_USER_ROLE.BUYER,ENUM_USER_ROLE.SELLER), getOrders);
router.get("/:id",auth(ENUM_USER_ROLE.BUYER), getSingleOrder);


export default router;
