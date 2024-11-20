import  User  from "../models/user.models.js";

export const getAllUsers = async (req, res) => {
    try {
        const currentUser = req.auth.userId
        const users = await User.find({clerkId:{$ne:currentUser}});
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
    }
};