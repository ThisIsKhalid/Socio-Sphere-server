import { CommentService } from "./comment.service.js";

const createComment = async (req, res) => {
  try {
    const data = req.body;
    const comment = await CommentService.createComment(data);
    res.status(201).json(comment);
  } catch (error) {
    // console.error(error);
    res.status(500).json({ error: "Failed to create a new comment" });
  }
};

const getCommentsByPostId = async (req, res) => {
  try {
    const { postId } = req.query;
    const comments = await CommentService.getCommentsByPostId(postId);
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch comments" });
  }
};

export const CommentController = {
  createComment,
  getCommentsByPostId,
};
