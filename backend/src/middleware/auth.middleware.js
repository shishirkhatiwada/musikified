import { clerkClient } from "@clerk/express";

export const protectedRoute = async (req, res, next) => {
  if (!req.auth.userId) {
    return res.status(401).json({ message: `You are not authorized` });
  }

  next();
};

export const requireAdmin = async (req, res, next) => {
  try {
    const currentUser = await clerkClient.users.getUser(req.auth.userId);
    const isAdmin =
      process.env.ADMIN_EMAIL === currentUser.primaryEmailAddress.emailAddress;

    if (!isAdmin) {
      return res.status(401).json({ message: "YOU ARE NOT AN ADMIN" });
    }
  } catch (error) {}
};
