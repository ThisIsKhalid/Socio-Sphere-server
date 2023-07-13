import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    location: {
      type: String,
    },
    workPlace: {
      type: String,
    },
    university: {
      type: String,
    },
    github: {
      type: String,
    },
    twitter: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
