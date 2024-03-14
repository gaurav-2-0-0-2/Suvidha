import express from "express";
import { User } from "../models/User.js";

export const authrouter = express.Router();

authrouter.post("/userlogin", async (req, res) => {
  const {email, name} = req.body;
  try {
    const newUser = new User({
      email,
      name
    });
    newUser.save();
    console.log("user created success");
  } catch (err) {
    console.error(err);
    console.log("Error creating new user in DB");
  }
});
