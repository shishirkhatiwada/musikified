import { Router } from "express";
import { protectedRoute } from "../middleware/auth.middleware.js";
import { authCallback } from "../controller/user.controller.js";

const route = Router()

route.get('/', protectedRoute, authCallback)



export default route