import mongoose from "mongoose";
// import { FamilyMember } from "./FamilyMember.js";
const Schema = mongoose.Schema;


// Define schema for family member

const userSchema = new Schema({
  email: {
    type: String,
  },
  name: {
    type: String,
  } 
  // rationNumber: Number,
  // familyMembers: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'FamilyMember'
  // }]
});



// const userInGovtDb = new Schema({
//   storedRationNumber: Number,
//   familyMembers: [familyMemberSchema],
// });

export const User = mongoose.model("User", userSchema);

