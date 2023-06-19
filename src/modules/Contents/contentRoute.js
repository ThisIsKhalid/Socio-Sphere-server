import express from "express";
import contentController from "./contentController.js";
import multer from "multer";

const router = express.Router();

// Set up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname}`;
    cb(null, fileName);
  },
});

// Configure multer upload
const upload = multer({ storage });

router.post(
  "/create-content",
  upload.single("file"),
  contentController.createContent
);
router.get("/", contentController.getContents);

export const contentRoutes = router;
