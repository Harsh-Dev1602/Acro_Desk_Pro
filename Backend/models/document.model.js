import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  filepath: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    trim: true,
    required: true
  },
  isapproved: {
    type: Boolean,
    default: false
  },
  uploadby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true // createdAt, updatedAt
});

const Document = mongoose.model('Document', documentSchema);
export default Document;
