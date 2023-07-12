import express from "express";
import { ContentController } from "./contentController.js";

const router = express.Router();

router.post(
  "/create-content",
 ContentController.createContent
);

router.get("/:id", ContentController.getSingleContents);

router.get("/", ContentController.getContents);

export const contentRoutes = router;
