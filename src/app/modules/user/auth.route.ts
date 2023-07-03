import express from "express";
import { authSignup } from "./user.controller";

const router = express.Router();

router.post("/signup", authSignup);

export default router;