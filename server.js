import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

async function bootstrap() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("🚀 Database is connected successfully !");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Socio Sphere is running on ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

bootstrap();
