import { Router } from "express";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware";

const route = Router();

route.get("/", protectedRoute, requireAdmin, createSong);

export default route;
