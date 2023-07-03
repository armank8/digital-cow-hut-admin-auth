import express from "express";
import { deleteUser, getSingleUser, getUsers, updateUser } from "./user.controller";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getSingleUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
