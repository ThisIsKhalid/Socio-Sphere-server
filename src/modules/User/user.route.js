import express from "express";
import { UserController } from "./user.controller.js";

const router = express.Router();

router.post("/create-user", UserController.createUser);

// router.get("/:id", ContentController.getSingleContents);

// router.get("/", ContentController.getContents);

export const UserRoutes = router;
