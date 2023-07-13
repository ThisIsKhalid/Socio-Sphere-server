import express from "express";
import { contentRoutes } from "../modules/Contents/contentRoute.js";
import { UserRoutes } from "../modules/User/user.route.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/contents",
    route: contentRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
