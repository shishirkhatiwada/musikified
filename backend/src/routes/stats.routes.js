import { Router } from "express";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stats.controller.js";

const route = Router();

route.get("/", protectedRoute, requireAdmin, getStats);
