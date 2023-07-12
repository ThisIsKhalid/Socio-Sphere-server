import express from "express";
import { contentRoutes } from "../modules/Contents/contentRoute.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/contents",
    route: contentRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;
