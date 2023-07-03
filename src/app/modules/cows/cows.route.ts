import express from "express";
import { createCow, deleteCow, getCows, getSingleCow, updateCow } from "./cows.controller";

const router = express.Router();

router.post("/", createCow);
router.get("/", getCows);
router.get("/:id", getSingleCow);
router.patch("/:id", updateCow);
router.delete("/:id", deleteCow);

export default router;
