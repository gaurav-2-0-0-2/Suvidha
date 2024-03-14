import express from "express";
import "dotenv/config";
import { authrouter } from "./routes/auth";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT || 4001;

// const connectToMongoDB = async() => {
//   await mongoose.connect(process.env.DATABASE_URL!, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// }
// connectToMongoDB();
//async function mongooseConnect(){
//  mongoose.connect(process.env.DATABASE_URL!, {
//  } as ConnectOptions)
//}

      mongoose.connect(process.env.MONGO_URL!);
      console.log("DB connected success");
    
     
   
   
    

 



app.use(express.json());

app.use("/auth", authrouter);

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
