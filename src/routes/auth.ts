import express, { Request, Response } from "express";
// import prisma from "../../prisma/prismaInstance"
import { PrismaClient } from "@prisma/client";
import { sendOTP, verifyOTP } from "../../utils/otpController";
const prisma = new PrismaClient();

export const authrouter = express.Router();

authrouter.post("/userlogin", async (req: Request, res: Response) => {
  const { name, rationNumber, phoneNumber } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        rationNumber: rationNumber,
        phoneNumber: phoneNumber,
      },
    });
    res.send(user);
    console.log("user created success");
  } catch (err) {
    console.error(err);
    console.log("Error creating new user in DB");
  }
});

authrouter.get("/familymembers", async (_req, res) => {
  try {
    const familyMembers = await prisma.familyMember.findMany();
    res.send(familyMembers);
    console.log("All family members fetched successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching family members from DB");
  }
});

authrouter.post("/distlogin", async (req, res) => {
  const { name, email } = req.body;
  try {
    const dist = await prisma.dist.create({
      data: {
        name: name,
        email: email,
      },
    });
    res.send(dist);
    console.log("user created success");
  } catch (err) {
    console.error(err);
    console.log("Error creating new user in DB");
  }
});

authrouter.post("/get-otp", async (req, res) => {
  const { phoneNumber } = req.body;
  try {
    await sendOTP(phoneNumber);
    res.json({ message: "OTP sent to mobile" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

authrouter.post("/verify-otp", async (req, res) => {
  const { phoneNumber, otp } = req.body;

  try {
    const isOtpValid = await verifyOTP(phoneNumber, otp);
    if (isOtpValid) {
      res.json({ message: "Mobile OTP verified success" });
    } else {
      res.status(400).json({ message: "Invalid OTP" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// authrouter.post("/familymembers",async (req,res)=>{

//   const {name, age, relationship} = req.body;

//   try{
//     const familyMember =  new FamilyMember({
//       name,
//       age,
//       relationship
//     })
//     await familyMember.save();
//     res.json(familyMember);
//     console.log("New family member added");
//   } catch (err) {
//     console.error(err);
//     console.log("Error creating new family member in DB");
//   }

// })
