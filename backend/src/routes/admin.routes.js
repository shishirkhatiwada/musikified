import { Router } from "express";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";
import {
  checkAdmin,
  createAlbum,
  createSong,
  deleteAlbum,
  deleteSong,
} from "../controller/admin.controller.js";

const route = Router();

route.use(protectedRoute, requireAdmin);

route.get("/check", checkAdmin);

route.post("/songs", createSong);
route.delete("/songs/:id", deleteSong);
route.post("/album", createAlbum);
route.delete("/album/:id", deleteAlbum);

export default route;
