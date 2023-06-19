import express from "express";
import cors from "cors";
import router from "./src/routes/routes.js";

const app = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/v1/", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
