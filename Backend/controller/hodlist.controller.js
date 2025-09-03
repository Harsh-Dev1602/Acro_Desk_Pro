import User from "../models/user.model.js";

export const hodlist = async (req, res) => {
  try {
    const ListHod = await User.find({ role: "HOD" });
    res.status(200).json(ListHod);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

