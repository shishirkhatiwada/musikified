import { Router } from "express";

const route = Router()

route.get("/", getAllAlbum )
route.get("/:albumId", getAlbumById)


export default route