import { Song } from "../models/song.models.js";
export const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 });
    res.status(200).json(songs);
  } catch (error) {
    console.log(error);
  }
};

export const getFeaturedSongs = async (req, res) => {
  try {
    const songs = await Song.aggregate([
      {
        $sample: { size: 5 },
      },
      { $project: { _id: 1, title: 1, artist: 1, imageUrl: 1, audioUrl: 1 } },
    ])
    res.status(200).json(songs)
    ;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingSongs = async (req, res) => {
  try {
    const songs = await Song.find().sort({ views: -1 });
    res.status(200).json(songs);
  } catch (error) {
    console.log(error);
  }
};

export const getMadeForYouSongs = async (req, res) => {
  try {
    const songs = await Song.find().sort({ createdAt: -1 });
    res.status(200).json(songs);
  } catch (error) {
    console.log(error);
  }
};
