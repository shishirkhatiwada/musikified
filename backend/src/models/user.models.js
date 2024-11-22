import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        imageUrl: { type: String, required: true },
        clerkId: { type: String, required: true, unique: true }, // Fixed typo
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
