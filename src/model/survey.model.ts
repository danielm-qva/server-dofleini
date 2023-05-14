
import mongoose from "mongoose";

const Survey = new mongoose.Schema({
  question: {
    type: String,
    unique: true,
    required: true
  },
  answerPositive: {
    type: Number,
    default: 0
  },
  answerNegaitve: {
    type: Number,
    default:0,
  },
  priority: {
    type: String,
    enum: ['High', 'Media', 'Low'],
    default: "High"
  },
  idBotosUser: {
    type: Array,
    default: []
  }
}, {
  timestamps: true,
  versionKey: false
})

export default mongoose.model("Survey", Survey);