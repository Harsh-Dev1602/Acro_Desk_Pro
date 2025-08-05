import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  message: {
    type: String,
    trim: true,
    required: true
  },
  postby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

const Announcement = mongoose.model('Announcement', announcementSchema);

export default Announcement;