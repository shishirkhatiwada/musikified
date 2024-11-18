import { Song } from "../models/song.models.js";
import { Album } from "../models/album.model.js";
import cloudinary from "../lib/cloudinary.js";

const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.log(error);
  }
};

export const createSong = async (req, res) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res
        .status(400)
        .json({ message: "Please provide all the required files" });
    }

    const { title, artist, albumId, duration } = req.body;

    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioUrl = await uploadToCloudinary(audioFile);
    const imageUrl = await uploadToCloudinary(imageFile);

    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    });

    await song.save();

    //if this song is in an album, push it to array of song
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: { songs: song._id },
      });
    }

    return res
      .status(201)
      .json({ message: "Song has been created", success: true });
  } catch (error) {
    console.log(`Something went wrong while uploading the song`);
  }
};

export const deleteSong = async (req, res) => {
  try {
    const { id } = req.params;

    const song = await Song.findById(id);

    if (song.albumId) {
      await Album.findByIdAndUpdate(song.albumId, {
        $pull: { songs: song._id },
      });
    }

    await Song.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: "Song has been deleted successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const createAlbum = async (req, res) => {
  try {
    const { title, artist, releaseYear } = req.body;
    const { imageFile } = req.body;
    const imageUrl = await uploadToCloudinary(imageFile);

    const album = new Album({
      title,
      artist,
      imageUrl,
      releaseYear,
    });

    await album.save();
    res
      .status(201)
      .json({ message: "Album has been created successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const deleteAlbum = async (req, res) => {
    try {
        const {id} = req.params
       await Song.deleteMany({albumId:id})
       await Album.findByIdAndDelete(id)

       res.status(200).json({message:"Album deleted successfully", success:true})
    } catch (error) {
        console.log(error);
        
    }
};


export const checkAdmin = async (req,res)=>{
res.status(200).json({admin:true})
}