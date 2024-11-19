import { Router } from "express";
import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const route = Router()

route.get("/", getAllAlbums )
route.get("/:albumId", getAlbumById)


export default route