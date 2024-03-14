import express from "express";
import "dotenv/config";
import { authrouter } from "./routes/auth.js";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT || 4001;

try{
  mongoose.connect(process.env.DATABASE_URL, {})
  console.log("DB connected success");
}catch(err){
  console.log(`DB connection failed: ${err}`);
}
  
app.use(express.json());

app.use("/auth", authrouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
