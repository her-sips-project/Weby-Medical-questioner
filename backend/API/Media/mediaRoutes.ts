import express from "express";
import { handleGetAllImgs } from "./mediaCont";
const router = express.Router();

router.get("/getAllImgs", handleGetAllImgs);


export default router;
