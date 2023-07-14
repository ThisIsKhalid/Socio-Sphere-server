import express from "express";
import { ContentController } from "./contentController.js";

const router = express.Router();

router.post(
  "/create-content",
 ContentController.createContent
);

router.get("/my-contents", ContentController.getContentsByEmail);
router.get("/:id", ContentController.getSingleContents);

router.patch('/:id', ContentController.updateContent)

router.get("/", ContentController.getContents);

export const contentRoutes = router;
