import mongoose from "mongoose";

const queryResponseSchema = new mongoose.Schema({
  response_text: {
    type: String,
    trim: true,
    required: true
  },
  responseby: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  query: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Query',
    required: true
  }
}, {
  timestamps: true // adds createdAt and updatedAt fields
});

const QueryResponse = mongoose.model('QueryResponse', queryResponseSchema);
export default QueryResponse;
