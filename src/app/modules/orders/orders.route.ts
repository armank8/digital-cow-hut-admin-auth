import express from "express";
import { createOrder, getOrders } from "./orders.controller";

const router = express.Router();

router.post("/", createOrder);
router.get("/", getOrders);


export default router;
