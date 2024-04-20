import express from "express";
import {
  handleGenerateNewShortURL,
  handleInsertURL,
  handleTotalClick,
} from "../controller/handleURL.js";
const router = express.Router();

//Post Route
router.post("/", handleGenerateNewShortURL);

//Get Routes
router.get("/:id", handleInsertURL);
router.get("/analytics/:id", handleTotalClick);
export default router;
