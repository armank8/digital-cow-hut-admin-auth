import express from "express";
import { createOrder, getOrders } from "./orders.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/",auth(ENUM_USER_ROLE.BUYER), createOrder);
router.get("/", getOrders);


export default router;
