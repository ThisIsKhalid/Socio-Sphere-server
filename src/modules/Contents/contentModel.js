import { Schema, model } from "mongoose";

const contentSchema = new Schema(
  {
    text: {
      type: String,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Content = model("Content", contentSchema);

export default Content;
