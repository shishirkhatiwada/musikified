// auth.controller.js
import User from "../models/user.models.js";

export const authCallback = async (req, res) => {
  try {
    // Get user data from Clerk
    const { userId } = req.auth;
    
    // Get the user data from your request body
    const { fullname, imageUrl } = req.body;

    // Validate required fields
    if (!fullname || !imageUrl || !userId) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields: fullname, imageUrl, or userId"
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ clerkId: userId });
    if (existingUser) {
      return res.status(200).json({
        success: true,
        message: "User already exists",
        user: existingUser
      });
    }

    // Create new user
    const newUser = await User.create({
      fullname,
      imageUrl,
      clerkId: userId
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser
    });

  } catch (error) {
    console.log("Something is wrong with the auth route", error);
    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
};