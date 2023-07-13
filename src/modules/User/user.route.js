import express from "express";
import { UserController } from "./user.controller.js";

const router = express.Router();

router.post("/create-user", UserController.createUser);
router.patch('/:email', UserController.updateUser)

router.get("/:email", UserController.getSingleUser);

// router.get("/", ContentController.getContents);

export const UserRoutes = router;
