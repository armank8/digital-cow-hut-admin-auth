import express from "express";
import { deleteUser, getSingleUser, getUsers, myProfile, updateUser } from "./user.controller";
import { auth } from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";

const router = express.Router();

router.get("/",auth(ENUM_USER_ROLE.ADMIN), getUsers);
router.get("/my-profile",auth(ENUM_USER_ROLE.BUYER,ENUM_USER_ROLE.SELLER), myProfile);
router.get("/:id",auth(ENUM_USER_ROLE.ADMIN), getSingleUser);
router.patch("/:id",auth(ENUM_USER_ROLE.ADMIN), updateUser);
router.delete("/:id",auth(ENUM_USER_ROLE.ADMIN), deleteUser);

export default router;
