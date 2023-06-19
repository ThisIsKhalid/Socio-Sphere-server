import { Schema, model } from "mongoose";

const contentSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Content = model("Content", contentSchema);

export default Content;
