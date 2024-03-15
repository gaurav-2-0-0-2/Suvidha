import mongoose from "mongoose";
const Schema = mongoose.Schema;
const familyMemberSchema = new Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  relationship: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const FamilyMember = mongoose.model(
  "FamilyMember",
  familyMemberSchema
);