import express from "express";
import userRoutes from "./userRoutes.js";
import fileRoutes from "./fileRoutes.js";
import messageRoutes from "./messageRoutes.js";



const router = express.Router();

router.use("/users", userRoutes);
router.use("/files", fileRoutes);
router.use("/messages", messageRoutes);

export default router;
