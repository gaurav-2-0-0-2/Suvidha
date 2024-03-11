import express from "express";
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


export const authrouter = express.Router();

authrouter.post("/signin", async (req:any, res:any)=>{

	try{
		const newUsers = await prisma.user.create({
			data: {
			 email: req.body.email,
			 name: req.body.name,	
			}
		})
		console.log("users creation success");
		res.send(newUsers);
	}catch(err){
		console.error(err);
	}

	
});
