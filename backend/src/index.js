import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";

dotenv.config({});
app.use(express.json());
app.use(clerkMiddleware());

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
