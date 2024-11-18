import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";

const __dirname = path.resolve();

dotenv.config({});
app.use(express.json());
app.use(clerkMiddleware()); // this will add auth to req obj => we will get userId, and other things from clerk
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, "temp"),
    createParentPath: true,
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  })
);

import userRoutes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import songRoutes from "./routes/songs.routes.js";
import authRoutes from "./routes/auth.routes.js";
import albumbRoutes from "./routes/album.routes.js";
import connectDb from "./lib/db.js";

const app = express();

const PORT = 8080;

app.use("/api/users", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/songs", songRoutes);
app.use("/api/albumb", albumbRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  connectDb();
});
