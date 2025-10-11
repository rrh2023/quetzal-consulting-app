import mongoose from "mongoose";

const LocationSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  address: {
    type: String,
    required: true,
  },
  year: {
    type: mongoose.Number,
    required: true,
  },
  whiteCount: {
    type: mongoose.Number,
  },
  whitePercentage: {
    type: mongoose.Number,
  },
  americanIndianAlaskanNativeCount: {
    type: mongoose.Number,
  },
  americanIndianAlaskanNativePercentage: {
    type: mongoose.Number,
  },
  blackCount: {
    type: mongoose.Number,
  },
  blackPercentage: {
    type: mongoose.Number,
  },
  hispanicCount: {
    type: mongoose.Number,
  },
  hispanicPercentage: {
    type: mongoose.Number,
  },
  twoOrMoreCount: {
    type: mongoose.Number,
  },
  twoOrMorePercentage: {
    type: mongoose.Number,
  },
  asianCount: {
    type: mongoose.Number,
  },
  asianPercentage: {
    type: mongoose.Number,
  },
  disabilityCount: {
    type: mongoose.Number,
  },
  disabilityPercentage: {
    type: mongoose.Number,
  },
  under18Count: {
    type: mongoose.Number,
  },
  under18Percentage: {
    type: mongoose.Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const Location = mongoose.model("location", LocationSchema);
export default Location;
