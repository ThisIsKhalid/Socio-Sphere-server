import { Schema, model } from "mongoose";

const contentSchema = new Schema(
  {
    text: {
      type: String,
    },
    img: {
      type: String,
    },
    email: {
      type: String,
    },
    name: {
      type: String,
    },
    photoURL: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Content = model("Content", contentSchema);

export default Content;
