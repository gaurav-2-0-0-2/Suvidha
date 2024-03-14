import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  // Other fields as needed
});

export const User = mongoose.model("User", userSchema);
