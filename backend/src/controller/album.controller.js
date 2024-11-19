import { Album } from "../models/album.model.js";

export const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find();
    res.status(200).json(albums);
  } catch (error) {
    console.log(error);
  }
};

export const getAlbumById = async (req, res) => {
    try {
        const {albumId} = req.params
        const album = await Album.findById(albumId).populate("songs")
        res.status(200).json(album)

        if(!album){
            return res.status(400).json({message:"Album not found"})
        }
        res.status(200).json(album)
    } catch (error) {
        console.log(error);
        
    }
};