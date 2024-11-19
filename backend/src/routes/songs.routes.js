import { Router } from "express";
import { getAllSongs, getFeaturedSongs, getMadeForYouSongs, getTrendingSongs } from "../controller/song.controller.js";
import { protectedRoute, requireAdmin } from "../middleware/auth.middleware.js";

const route = Router()

route.get("/", protectedRoute, requireAdmin, getAllSongs)
route.get("/featured", getFeaturedSongs )
route.get("/made-for-you", getMadeForYouSongs)
route.get("/trending", getTrendingSongs)

export default route