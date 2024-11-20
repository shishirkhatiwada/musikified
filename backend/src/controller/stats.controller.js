import { Album } from "../models/album.model.js"
import { Song } from "../models/song.models.js"
import {User} from "../models/user.models.js";

export const getStats = async (req, res) => {
  try {
    const [totalSongs, totalAlbums, totalUsers, uinqueArtists] =
      await Promise.all([
        Song.countDocuments(),
        Album.countDocuments(),
        User.countDocuments(),

        Song.aggregate([
          {
            $unionWith: {
              coll: "albums",
              pipeline: [],
            },
          },
          {
            $group: {
              _id: "$artist",
            },
          },
          {
            $count: "count",
          },
        ]),
      ]);
    res.status(200).json({
      totalSongs,
      totalAlbums,
      totalUsers,
      totalArtists: uinqueArtists[0]?.count || 0,
    });
  } catch (error) {}
};
