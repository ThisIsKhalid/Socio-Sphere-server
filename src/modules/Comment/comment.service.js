import Comment from "./comment.model.js";

const createComment = async (data) => {
  try {
    const comment = await Comment.create(data);
    return comment;
  } catch (error) {
    console.error(error);
  }
};

const getCommentsByPostId = async (postId) => {
  try {
    const comments = await Comment.find({ postId });
    return comments;
  } catch (error) {
    console.error(error);
  }
};

export const CommentService = {
  createComment,
  getCommentsByPostId,
};
