import mongoose from "mongoose";

const querySchema = new mongoose.Schema({
  subject: {
    type: String,
    trim: true
  },
  query_text: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    default: 'pending',
    trim: true
  },
  isactive: {
    type: Boolean,
    default: true
  },
  queryby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to User model
    required: true
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

 const Query = mongoose.model('Query', querySchema);
 export default Query;
