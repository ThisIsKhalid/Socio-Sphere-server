import express from "express";
import { CommentController } from "./comment.controller.js";

const router = express.Router();

router.post("/", CommentController.createComment);

router.get("/", CommentController.getCommentsByPostId);

export const commentRoutes = router;
