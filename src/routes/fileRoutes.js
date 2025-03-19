import express from "express";
import { readFileAsync } from "../controllers/fileController.js";

const router = express.Router();

router.get("/read", readFileAsync);

export default router;
