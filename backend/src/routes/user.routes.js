import { Router } from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { getAllUsers } from "../controller/user.controller.js";

const route = Router();

route.get("/", protectedRoute, getAllUsers);

export default route;
