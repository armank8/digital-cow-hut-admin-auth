import express from "express";
import { createCow, deleteCow, getCows, getSingleCow, updateCow } from "./cows.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.post("/",auth(ENUM_USER_ROLE.SELLER), createCow);
router.get("/",auth(ENUM_USER_ROLE.SELLER,ENUM_USER_ROLE.BUYER,ENUM_USER_ROLE.ADMIN), getCows);
router.get("/:id",auth(ENUM_USER_ROLE.SELLER,ENUM_USER_ROLE.BUYER,ENUM_USER_ROLE.ADMIN), getSingleCow);
router.patch("/:id", updateCow);
router.delete("/:id", deleteCow);

export default router;
