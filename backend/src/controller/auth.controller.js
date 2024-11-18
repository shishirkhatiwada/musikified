import User from "../models/user.models.js";

export const authCallback = async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;
    const user = await User.findOne({ clerkId: id });
    if (!user) {
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.log(`Something is wrong with the auth route`, error);
    res.status(500).json({ success: false });
  }
};
