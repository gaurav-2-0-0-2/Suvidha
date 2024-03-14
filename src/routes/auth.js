import express from "express";
import { User } from "../models/User.js";
import { Dist } from "../models/Distributor.js";

export const authrouter = express.Router();

authrouter.post("/userlogin", async (req, res) => {
  const {email, name} = req.body;
  try {
    const newUser = new User({
      email,
      name
    });
    newUser.save();
    res.json(newUser);
    console.log("user created success");
  } catch (err) {
    console.error(err);
    console.log("Error creating new user in DB");
  }
});

authrouter.post("/distlogin", async (req, res) => {
  const {email, name} = req.body;
  try {
    const newDist = new Dist({
      email,
      name
    });
    newDist.save();
    res.json(newDist);
    console.log("new distributor created successfully");
  } catch (err) {
    console.error(err);
    console.log("Error creating new distributor in DB");
  }
});